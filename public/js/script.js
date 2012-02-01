$(document).ready( function(){

	$(document).scroll( function() {
		var containerY = $(this).scrollTop();
		var speed1 = 0.1; // 0 = no movement, 1 = match page scroll speed
		var offset1 = -containerY * speed1;
		var speed2 = 0.6; // 0 = no movement, 1 = match page scroll speed
		var offset2 = -containerY * speed2;

		$(this).find($('body')).css('background-position', '50% ' + offset1 + 'px');
		$(this).find($('#wrapper')).css('background-position', '100% ' + offset2 + 'px');

		// if( containerY >= 222 ){
		// 	$('#main-navigation').addClass('sticky');
		// } else {
		// 	$('#main-navigation').removeClass('sticky');
		// }

	});

	prettyPrint();
});