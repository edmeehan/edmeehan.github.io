$(function() {
	//mega dropdown
	$('.menu-large').on('show.bs.dropdown', function (event) {
  	$('#siteHeader').addClass('show-megamenu');
	}).on('hide.bs.dropdown', function (event) {
  	$('#siteHeader').removeClass('show-megamenu');
	});
});