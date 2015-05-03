$(document).ready(function() {

	// Nav Animation
	$('.navicon-button').click(function() {
		$(this).toggleClass('open');
		$('nav').toggleClass('active'); 
	});

	// Smart Underlines
	SmartUnderline.init({
	  location: ''
	});

	// Init Fastclick.js
	FastClick.attach(document.body);

});