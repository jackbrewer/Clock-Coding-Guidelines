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

	// Scroll to Anchors
	$('#main-navigation a').on('click',function(e){
		var target = '#' + $(this).attr('href').split('#')[1];
		$('html, body').stop().animate({
			scrollTop: $(target).offset().top
		}, 300);
		e.preventDefault();
	});

});