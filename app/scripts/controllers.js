(function(){
  "use strict";
  var app = angular.module('controllers', []);

  app.controller('FeedController', ['$http','$log','$scope','$compile', function($http,$log,$scope,$compile) {
    
    $scope.channels = [1,2,3];
    $scope.vidAPI = [];

    /**
    * Select video for channel
    */
    $scope.selectVideo = function(vidObj){
      var srcIndex = 'srcIndex' + this.$parent.$index;
      var videoID = 'id' + Date.now();
      var videoSrc = '';
      var that = this;
      var vidAPI;

      var vimeoReady = function(){
        that.$parent.status = 'warning';
        that.$parent.chState = 'enabled';

        that.$parent.vidAPI.api('seekTo', vidObj.src_LOC);
      };

      var youtubeReady = function(){
        that.$parent.status = 'warning';
        that.$parent.chState = 'enabled';

        that.$parent.vidAPI.mute();
        that.$parent.vidAPI.setPlaybackQuality('highres');
        that.$parent.vidAPI.seekTo(vidObj.src_LOC, true);
      };

      if($scope[srcIndex] !== this.$index){
        $scope[srcIndex] = this.$index;
        //this.$parent.chState = 'enabled';

        if(this.$parent.channelTag){
          this.$parent.channelTag.remove();
          this.$parent.channelVideo.remove();
        }

        // Add channel tag
        this.$parent.channelTag = $compile('<li ng-class="status" ng-init="status = \'default\'" class="list-group-item">Ch ' + (this.$parent.$index + 1) + ' <span class="label label-default">Loading</span><span class="label label-warning">Ready</span><span class="label label-success">Playing</span></li>')(this.$parent);
        angular.element(document.getElementById('activeChannels')).append(this.$parent.channelTag);

        // Add video iframe
        this.$parent.channelVideo = $compile('<iframe ng-class="playVideo" ng-init="playVideo = \'ch-hidden\'"  id="' + videoID + '" ></iframe>')(this.$parent);
        
        switch(vidObj.src_TYPE){
          case 1: //Vimeo
            
            videoSrc += 'https://player.vimeo.com/video/';
            videoSrc += vidObj.src_ID;
            videoSrc += '?api=1&title=0&portrait=0&byline=0&badge=0&autopause=0&autoplay=1&player_id=' + videoID;

            // this.$parent.vidAPI = new Froogaloop(this.$parent.channelVideo[0]);
            // this.$parent.vidAPI.addEvent('ready',vimeoReady);

            break;
          case 2: // YouTube
            
            videoSrc += 'https://www.youtube.com/embed/';
            videoSrc += vidObj.src_ID;
            videoSrc += '?enablejsapi=1&autoplay=0&autohide=0&control=0&origin=' + window.location.origin;

            // this.$parent.vidAPI = new YT.Player(this.$parent.channelVideo[0], {
            //   events: {
            //     'onReady': youtubeReady,
            //     //'onStateChange': function(){console.log('onstate change')}
            //   }
            // });

            break;
        };

        this.$parent.channelVideo[0].src = videoSrc;
        angular.element(document.getElementById('masterChannel')).append(this.$parent.channelVideo);
            
        
      }else{
        $scope[srcIndex] = null;
        vidObj = null;
        this.$parent.chState = 'disabled';
        this.$parent.channelTag.remove();
        this.$parent.channelVideo.remove();
      }

      //$rootScope.$broadcast('videoSelected', vidObj, this.$parent.$index);
    };

    /**
    * Turn channel on and off
    */
    $scope.toggleChannel = function(){
      var that = this;
      debugger;
      var paused = function(value){
        //debugger;
        if(value){
          that.vidAPI.api('play');
        }else{
          that.vidAPI.api('pause');
        }
      }

      this.chState = (this.chState === 'active')? 'inactive' : 'active';
      this.playVideo = (this.playVideo === 'ch-hidden')? 'ch-show' : 'ch-hidden';
      this.status = (this.status === 'warning')? 'success' : 'warning';

      this.vidAPI.api('paused',paused);

      //$rootScope.$broadcast('channelToggled', this.$index, this.chState);
    };

    /**
    * Get video feed and update ViewModel
    */
    $http.get('//localhost/data/video_feed.json').then(
      function successCallback(response) {
        $scope.video_feed = response.data;
      },
      function errorCallback(response) {
        $log.log(response);
      }
    );

  }]);

})();