$(document).ready(function() {

	$('.navicon-button').click(function() {
		$(this).toggleClass('open');
		$('nav').toggleClass('active'); 
	});

	SmartUnderline.init({
	  location: ''
	})

});