(function(){
  var app = angular.module('video-master', []);

  app.controller('MasterController', ['$scope','$compile', function($scope,$compile){
    
    /**
    * Array - selected channel video Objs
    */
    $scope.channels = [];

    /**
    * Video selected listener
    */
    $scope.$on('videoSelected', function(event,vidObj,index){
      console.log(vidObj,index);
      //$scope.updateChannel(vidObj,index);
    });

    /**
    * Channel play listener
    */
    $scope.$on('channelToggled', function(event,status,index){
      //console.log($scope.channels[index],status);
    });

    /**
    * Update channel with selected video obj
    */
    $scope.updateChannel = function(vidObj,index){
      var domObj = {};
      
      // adding or replace video player in channel
      if(vidObj !== null){
        domObj.helloID = 'id' + Date.now();
        domObj.iframe = document.createElement('iframe');
        domObj.iframe.src = srcString();
        domObj.iframe.setAttribute('id',domObj.helloID);
        domObj.parentObj = document.getElementById('channel_' + (index + 1));

        // switch(vidObj.src_TYPE){
        //   case 1: //Vimeo
        //     domObj.videoAPI = $f(domObj.iframe);
        //     domObj.videoAPI.addEvent('ready', function(){vimeoAPI()});
        //     break;
        //   case 2: // YouTube
        //     domObj.API = new YT.Player(domObj.iframe,{
        //       events: {
        //         'onReady' : ready
        //       }
        //     })
        //     //youtubeAPI()
        //     break;
        // };

        domObj.parentObj.appendChild(domObj.iframe);
      }

      // removing video player in channel
      if(vidObj === null){
        debugger;
      }
      // returns src string for video iframe
      function srcString(){
        var string = '';

        switch(vidObj.src_TYPE){
          case 1: //Vimeo
            string += 'https://player.vimeo.com/video/';
            string += vidObj.src_ID;
            string += '?api=1&title=0&portrait=0&byline=0&badge=0&autopause=0&autoplay=1&player_id=' + domObj.helloID;
            break;
          case 2: // YouTube
            string += 'http://www.youtube.com/embed/';
            string += vidObj.src_ID;
            string += '?enablejsapi=1&autoplay=0&autohide=0&control=0';
            break;
        };

        return string;
      };
      // setup Vimeo API
      function vimeoAPI(){
        ready();
        domObj.videoAPI.api('pause');
        domObj.videoAPI.api('seekTo', vidObj.src_LOC);
      };
      // setup YouTube API
      function youtubeAPI(){
      }
      // set ready for channel
      function ready(){
        $scope['status' + (index + 1)] = 'success';
      }
    };
    
  }]);

})();