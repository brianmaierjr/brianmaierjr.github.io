$(document).ready(function() {

	// Nav Animation
	$('.navicon-button, nav ul a').click(function() {
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
