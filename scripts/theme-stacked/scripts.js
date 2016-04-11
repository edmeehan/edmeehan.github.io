$(function() {
	//mega dropdown
	$('.menu-large').on('show.bs.dropdown', function (event) {
  	$('#siteHeader').addClass('show-megamenu');
	}).on('hide.bs.dropdown', function (event) {
  	$('#siteHeader').removeClass('show-megamenu');
	});

	setTimeout(function(){
		var $guide = $('#guide');
		var $window = $(window);
		var top = Math.round($guide.offset().top) - 100;

		$window.scroll(function(){
			if($window.scrollTop() > top){
				$guide.addClass('active');
				$window.off('scroll');
			}
		});

		$(".continue").click(function() {
	    $('html, body').animate({
        scrollTop: $($(this).data().next).offset().top
	    }, 2000);
		});

	},500);

});