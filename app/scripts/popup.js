(function(){
  "use strict";

  var wrapper = document.getElementById('videoWrapper');
  var uniqueID = 0;

	//listen to holla back
	window.addEventListener('message',function(event) {
	  if(event.origin !== window.location.origin) return;
	  
	  switch(event.data.t) {
	    case 'video':
	        videoPlayer(event.data);
	        break;
	    case 'action':
	        videoAction(event.data);
	        break;
		}

	}, false);

	//new video player
	var videoPlayer = function(obj){

		var id, original, div, iframe, player;

		id = 'player' + obj.ch;
		original = document.getElementById(id);

		if(original){
			original.remove();
		}

		div = document.createElement('div');
		div.setAttribute("id", id);
		
		iframe = document.createElement('iframe');
		iframe.setAttribute("id", "video" + uniqueID);

		switch(obj.a.type){
      case 1: //Vimeo
        iframe.src = "//player.vimeo.com/video/" + obj.a.id + "?api=1&title=0&portrait=0&byline=0&badge=0&autopause=0&player_id=video" + uniqueID + "&#t=" + obj.a.loc;
        break;
      case 2: // YouTube
      	iframe.src = "//www.youtube.com/embed/" + obj.a.id + "?enablejsapi=1&autoplay=1&autohide=0&control=0&origin=" + window.location.origin + "&start=" + obj.a.loc;
        break;
    }
		
		div.appendChild(iframe);
	  wrapper.appendChild(div);

	  uniqueID++;

	  /**
	   * VIDEO API
	  */

	  switch(obj.a.type){
        case 1: // Vimeo Player
          player = $f(iframe);

          player.addEvent('ready',function(){
            player.api('setVolume',0);
          });

          break;
        case 2: // Youtube Player
          player = new YT.Player(iframe,{
            events: {
              'onReady': function(data){

                player.mute();

              },
            }
          });
          
          break;
      }

	};

	//new video action
	var videoAction = function(obj){

		var id, video, videos;

		id = 'player' + obj.ch;
		video = document.getElementById(id);
		videos = document.querySelectorAll('.videoWrapper > div');

		for (var i = videos.length - 1; i >= 0; i--) {
			videos[i].classList.remove('active');
		}

		video.classList.add('active');


	};


})();