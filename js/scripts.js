// Navicon
$('#nav-toggle, nav a').click(function() {
	event.preventDefault();
	$('#nav-toggle').toggleClass('open');
});

// Main Nav
$('nav').click(function() {
	event.preventDefault();
	$(this).toggleClass('active');
});