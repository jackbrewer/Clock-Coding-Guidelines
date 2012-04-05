$(document).ready( function(){

	// Parallax Background
	$('body').yScroll({
		speed: 0.1
	});
	$('#wrapper').yScroll({
		speed: 0.3
	});

	// Google Syntax Highlighting
	prettyPrint();

	// Fixed Nav
	var offset = $(window),
			element = $('#main-navigation ul');
	offset.scroll( function(){
		if (offset.scrollTop() >= 222) {
			element.addClass('fixed');
		} else {
			element.removeClass('fixed');
		}
	});

	// Scroll to Anchors
	$('#main-navigation a').on('click',function(e){
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 68
		}, 1000);
		e.preventDefault();
	});

});