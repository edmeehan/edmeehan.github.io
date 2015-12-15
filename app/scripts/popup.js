(function(){
  "use strict";
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

	var videoPlayer = function(obj){

		var wrapper = document.createElement('div');
		var iframe = document.createElement('iframe');
		var id = 'id-testing';

		switch(obj.a.type){
      case 1: //Vimeo
        iframe.src = "//player.vimeo.com/video/" + obj.a.id + "?api=1&title=0&portrait=0&byline=0&badge=0&autopause=0&player_id=" + id + "&#t=" + obj.a.loc;
        break;
      case 2: // YouTube
      	iframe.src = "//www.youtube.com/embed/" + obj.a.id + "?enablejsapi=1&autoplay=1&autohide=0&control=0&origin=" + window.location.origin + "&start=" + obj.a.loc;
        break;
    }
		
		iframe.setAttribute("id", id);

	  wrapper.appendChild(iframe);

	  document.body.appendChild(wrapper);

	};

	var videoAction = function(obj){

	};

})();