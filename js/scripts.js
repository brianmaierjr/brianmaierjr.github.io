$(document).ready(function() {

	// Nav Animation
	$('.navicon-button, nav ul a').click(function() {
		$('.navicon-button').toggleClass('open'); 
		$('nav').toggleClass('active'); 
	});

	// Smart Underlines
	SmartUnderline.init({ 
	  location: ''
	});

	// Init Fastclick.js
	FastClick.attach(document.body); 

});
