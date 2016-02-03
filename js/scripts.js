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

    // About Section
    $('.aboutTrigger').click(function(e) {
        e.preventDefault();
        $('#about').toggleClass('active');
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
