(function(){
  "use strict";
  var app = angular.module('controllers', []);

  app.controller('FeedController', ['$http','$log','$scope','$sce','$timeout', function($http,$log,$scope,$sce,$timeout) {
    
    $scope.channels = [1,2,3];
    $scope.activeChannels = {};

    /**
    * Select video for channel
    */
    $scope.selectVideo = function(){
      var srcActive = 'srcActive_' + this.$parent.$index;
      var channelObj = {};
      var that = this;
      
      if($scope[srcActive] !== this.$index){

        $scope[srcActive] = this.$index;
        channelObj.id = 'id' + Date.now();
        channelObj.ch = this.$parent.ch;
        channelObj.vid = this.vid;
        channelObj.status = 'default';

        switch(this.vid.src_TYPE){
          case 1: //Vimeo
            channelObj.src = $sce.trustAsResourceUrl("//player.vimeo.com/video/" + this.vid.src_ID + "?api=1&title=0&portrait=0&byline=0&badge=0&autopause=0&player_id=" + channelObj.id);
            break;
          case 2: // YouTube
            channelObj.src = $sce.trustAsResourceUrl("//www.youtube.com/embed/" + this.vid.src_ID + "?enablejsapi=1&autoplay=0&autohide=0&control=0&origin=" + window.location.origin);
            break;
        }
        // update active channels obj - init repeater
        $scope.activeChannels[this.$parent.$index] = channelObj;
        // set small delay so iframe dom updates
        $timeout(function () {
           $scope.$emit('iframeFinished',channelObj,that);
        },0);
        
      }else{
        $scope[srcActive] = null;
        delete $scope.activeChannels[this.$parent.$index];
      }

    };

    /**
    * Turn channel on and off
    */
    $scope.toggleChannel = function(){

      if($scope.liveChannel !== this.$index){

        if(!isNaN($scope.liveChannel)){ // switch channels
          $scope.activeChannels[$scope.liveChannel].status = 'ready';
          $scope.stopPlay($scope.liveChannel);
        }

        $scope.liveChannel = this.$index;

        if($scope.activeChannels[this.$index].status !== 'play'){
          $scope.activeChannels[this.$index].status = 'play';
          $scope.videoPlay(this.$index);
        }else{
          $scope.activeChannels[this.$index].status = 'ready';
          $scope.stopPlay(this.$index);
        }
      }else{
        $scope.activeChannels[this.$index].status = 'ready';
        $scope.stopPlay(this.$index);
        $scope.liveChannel = undefined;
      }
      //$scope.$apply();

    };

    /**
    * Callback when iframe is loaded in DOM and ready for video API
    */
    $scope.$on('iframeFinished', function(init,obj,scope) {

      var timeout, player, iframe = document.getElementById(obj.id);

      switch(obj.vid.src_TYPE){
        case 1: // Vimeo Player
          player = $f(iframe);
          $scope.activeChannels[scope.$parent.$index].api = player;

          player.addEvent('ready',function(){
            player.api('seekTo', obj.vid.src_LOC);
            player.api('pause');
            player.addEvent('loadProgress',function(event){
              clearTimeout(timeout);
              timeout = setTimeout(function() {
                // vimeo has a 10sec buffer - this event fires when its done calling loadProgress
                if($scope.activeChannels[scope.$parent.$index].status === 'default'){
                  $scope.activeChannels[scope.$parent.$index].status = 'ready';
                  scope.$parent.chState = 'enabled';
                  $scope.$apply(); //TODO - need better option
                }
              }, 3000);
              
            });
            // player.addEvent('playProgress',function(event){
            //   console.log('PLAY',event);
            // });
            player.addEvent('finish',function(event){
              player.api('seekTo', obj.vid.src_LOC);
              $scope.activeChannels[scope.$parent.$index].status = 'ready';
              $scope.$apply();
            });
          });
          break;
        case 2: // Youtube Player
          player = new YT.Player(iframe,{
            events: {
              'onReady': function(data){
                player.seekTo(obj.vid.src_LOC, true);
                player.mute();

                $scope.activeChannels[scope.$parent.$index].api = player;
              },
              'onStateChange': function(data){
                if(data.data === 3){ // buffering
                  if($scope.activeChannels[scope.$parent.$index].status !== 'play'){
                    $scope.activeChannels[scope.$parent.$index].status = 'ready';
                    scope.$parent.chState = 'enabled';
                    $scope.$apply(); //TODO - need better option
                  }
                }
                if(data.data === 0){ // finished
                  player.seekTo(obj.vid.src_LOC, true);
                  $scope.activeChannels[scope.$parent.$index].status = 'ready';
                  $scope.$apply();
                }
              }
            }
          });
          
          break;
      }
    });

    /**
    * Play video for channel
    */
    $scope.videoPlay = function(channel){
      var api = $scope.activeChannels[channel].api;

      switch($scope.activeChannels[channel].vid.src_TYPE){
        case 1: // Vimeo Player
          api.api('play');
          break;
        case 2:
          api.playVideo();
          break;
      }

    };

    /**
    * Stop video for channel
    */
    $scope.stopPlay = function(channel){
      var api = $scope.activeChannels[channel].api;

      switch($scope.activeChannels[channel].vid.src_TYPE){
        case 1: // Vimeo Player
          api.api('pause');
          break;
        case 2:
          api.pauseVideo();
          break;
      }

    };

    /**
    * Get video feed and update ViewModel
    */
    $http.get('/app/data/video_feed.json').then(
      function successCallback(response) {
        $scope.video_feed = response.data;
      },
      function errorCallback(response) {
        $log.log(response);
      }
    );

  }]);

})();
