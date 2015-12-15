window.popupObj = null;
/*
 * postMessage Object
 *

{
  t: string|type,
  ch: int|channel,
  a: string|action
}
*/

(function($){
  "use strict";
  var app = angular.module('controllers', []);

  app.controller('FeedController', ['$http','$log','$scope','$sce','$timeout', function($http,$log,$scope,$sce,$timeout) {
    
    $scope.channels = [1,2,3];
    $scope.activeChannels = {};

    /**
    * Select video for channel
    */
    $scope.popupWindow = function(){
      window.popupObj = window.open('popout.html','myWindow','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
      
    };

    /**
    * Select video for channel
    */
    $scope.selectVideo = function(){
      var srcActive = 'srcActive_' + this.$parent.$index;
      var channelObj = {};
      var that = this;
      
      if($scope[srcActive] !== this.$index){
        this.$parent.chState = 'enabled';

        $scope[srcActive] = this.$index;
        channelObj.id = 'id' + Date.now();
        channelObj.ch = this.$parent.ch;
        channelObj.vid = this.vid;
        channelObj.status = 'ready';

        switch(this.vid.src_TYPE){
          case 1: //Vimeo
            channelObj.src = $sce.trustAsResourceUrl("//player.vimeo.com/video/" + this.vid.src_ID + "?api=1&title=0&portrait=0&byline=0&badge=0&autopause=0&player_id=" + channelObj.id + "&#t=" + this.vid.src_LOC);
            break;
          case 2: // YouTube
            channelObj.src = $sce.trustAsResourceUrl("//www.youtube.com/embed/" + this.vid.src_ID + "?enablejsapi=1&autoplay=1&autohide=0&control=0&origin=" + window.location.origin + "&start=" + this.vid.src_LOC);
            break;
        }
        // update active channels obj - init repeater
        $scope.activeChannels[this.$parent.$index] = channelObj;

        // add channel to parent for display
        this.$parent.channelObj = channelObj;

        this.$parent.newVideo();

        // set small delay so iframe dom updates
        $timeout(function () {
           $scope.$emit('iframeFinished',channelObj,that);
        },0);

        // new video postMessage
        if(window.popupObj !== null){
          window.popupObj.postMessage({
            t: 'video',
            ch: this.$parent.ch,
            a: {
              type:this.vid.src_TYPE,
              loc:this.vid.src_LOC,
              id:this.vid.src_ID
            }
          },'*');
        }
        
      }else{
        this.$parent.chState = 'disabled';
        $scope[srcActive] = null;
        this.$parent.channelObj = {src:null,id:null};
        delete $scope.activeChannels[this.$parent.$index];
      }

    };

    /**
    * Turn channel on and off
    */
    $scope.toggleChannel = function(){

      var other,iframe = document.getElementById(this.channelObj.id);

      if($scope.liveChannel !== this.$index){

        if(!isNaN($scope.liveChannel)){ // switch channels
          $scope.activeChannels[$scope.liveChannel].status = 'ready';
          //debugger;
          other = document.getElementById($scope.activeChannels[$scope.liveChannel].id);
          other.parentElement.classList.remove('fitVideo');
        }

        $scope.liveChannel = this.$index;
        $scope.activeChannels[this.$index].status = 'play';
        iframe.parentElement.classList.add('fitVideo');
        
      }else{
        $scope.activeChannels[this.$index].status = 'ready';
        iframe.parentElement.classList.remove('fitVideo');
        $scope.liveChannel = undefined;
      }
      

    };

    /**
    * Callback when iframe is loaded in DOM and ready for video API
    * temp removed buffering scripts since we changed the play method of videos
    */
    $scope.$on('iframeFinished', function(init,obj,scope) {

      var timeout, player, iframe = document.getElementById(obj.id);

      switch(obj.vid.src_TYPE){
        case 1: // Vimeo Player
          player = $f(iframe);
          $scope.activeChannels[scope.$parent.$index].api = player;

          player.addEvent('ready',function(){
            player.api('setVolume',0);
            // player.api('seekTo', obj.vid.src_LOC);
            //player.api('pause');
            // player.addEvent('loadProgress',function(event){
            //   clearTimeout(timeout);
            //   timeout = setTimeout(function() {
            //     // vimeo has a 10sec buffer - this event fires when its done calling loadProgress
            //     if($scope.activeChannels[scope.$parent.$index].status === 'default'){
            //       $scope.activeChannels[scope.$parent.$index].status = 'ready';
            //       scope.$parent.chState = 'enabled';
            //       $scope.$apply(); //TODO - need better option
            //     }
            //   }, 3000);
              
            // });
            // player.addEvent('playProgress',function(event){
            //   console.log('PLAY',event);
            // });
            // player.addEvent('finish',function(event){
            //   player.api('seekTo', obj.vid.src_LOC);
            //   $scope.activeChannels[scope.$parent.$index].status = 'ready';
            //   $scope.$apply();
            // });
          });
          break;
        case 2: // Youtube Player
          player = new YT.Player(iframe,{
            events: {
              'onReady': function(data){
                //player.seekTo(obj.vid.src_LOC, true);
                player.mute();

                $scope.activeChannels[scope.$parent.$index].api = player;
              },
              // 'onStateChange': function(data){
              //   if(data.data === 3){ // buffering
              //     if($scope.activeChannels[scope.$parent.$index].status !== 'play'){
              //       $scope.activeChannels[scope.$parent.$index].status = 'ready';
              //       scope.$parent.chState = 'enabled';
              //       $scope.$apply(); //TODO - need better option
              //     }
              //   }
              //   if(data.data === 0){ // finished
              //     player.seekTo(obj.vid.src_LOC, true);
              //     $scope.activeChannels[scope.$parent.$index].status = 'ready';
              //     $scope.$apply();
              //   }
              // }
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
    $http.get('data/video_feed.json').then(
      function successCallback(response) {
        $scope.video_feed = response.data;
      },
      function errorCallback(response) {
        $log.log(response);
      }
    );

  }]);
  
  //jQuery Dom Ready
  $(function() {
    
    var resized,
      $vid = $('#masterChannel'),
      $win = $(window),
      winWidth = $win.width();

    var setVideoLocCSS = function(){

      var head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style'),
      ele = document.getElementById('videoLocationCSS'),
      offset = $vid.offset(),
      width = $vid.width(),
      height = $vid.height(),
      css = '.fitVideo { width:' + width + 'px; height:' + height + 'px; top:' + offset.top + 'px; left:' + offset.left + 'px;}';

      style.type = 'text/css';
      style.setAttribute('id','videoLocationCSS');

      if(ele){
        $(ele).remove();
      }

      if (style.styleSheet){
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      $(head).append(style);
    };

    // resize window event
    $win.resize(function(){
      //clear timeout and reset function until resize stops
      clearTimeout(resized);  
      resized = setTimeout(function() {
        //resize now do stuff
        if($win !== $win.width()){
          setVideoLocCSS();
        }
      }, 400);
    });

    setVideoLocCSS();

  });

})(jQuery);