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

    // Fast Click
    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
                FastClick.attach(document.body);
        }, false);
    };

    // Animsition
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'body',
        transition: function(url){ window.location.href = url; }
    });

    // Social Sharing
    $(".js-social-share").on("click", function(e) {
      e.preventDefault();
      windowPopup($(this).attr("href"), 500, 300);
    });

});


// Social Share Popup
function windowPopup(url, width, height) {
  // Calculate the position of the popup so
  // it’s centered on the screen.
  var left = (screen.width / 2) - (width / 2),
      top = (screen.height / 2) - (height / 2);

  window.open(
    url,
    "",
    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
  );
}
