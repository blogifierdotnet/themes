/* ===================================================================
 * Philosophy - Main JS
 *
 * ------------------------------------------------------------------- */

(function ($) {

	"use strict";

	var $WIN = $(window);

	// Add the User Agent to the <html>
	// will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
	var doc = document.documentElement;
	doc.setAttribute('data-useragent', navigator.userAgent);

	// svg fallback
	if (!Modernizr.svg) {
		$(".header__logo img").attr("src", "images/logo.png");
	}


	/* Preloader
	 * ----------------------------------------------------- */
	var clPreloader = function () {

		$("html").addClass('cl-preload');

		$WIN.on('load', function () {

			//force page scroll position to top at page refresh
			// $('html, body').animate({ scrollTop: 0 }, 'normal');

			// will first fade out the loading animation 
			$("#loader").fadeOut("slow", function () {
				// will fade out the whole DIV that covers the website.
				$("#preloader").delay(300).fadeOut("slow");
			});

			// for hero content animations 
			$("html").removeClass('cl-preload');
			$("html").addClass('cl-loaded');

		});
	};


	/* pretty print
	 * -------------------------------------------------- */
	var clPrettyPrint = function () {
		$('pre').addClass('prettyprint');
		$(document).ready(function () {
			prettyPrint();
		});
	};


	/* Masonry
	 * ---------------------------------------------------- */
	var clMasonryFolio = function () {

		var containerBricks = $('.masonry');

		containerBricks.imagesLoaded(function () {
			containerBricks.masonry({
				itemSelector: '.masonry__brick',
				percentPosition: true,
				resize: true
			});
		});


		// layout Masonry after each image loads
		containerBricks.imagesLoaded().progress(function () {
			containerBricks.masonry('layout');
		});
	};


	/* Placeholder Plugin Settings
	 * ------------------------------------------------------ */
	var clPlaceholder = function () {
		$('input, textarea, select').placeholder();
	};


	/* Alert Boxes
	 * ------------------------------------------------------ */
	var clAlertBoxes = function () {

		$('.alert-box').on('click', '.alert-box__close', function () {
			$(this).parent().fadeOut(500);
		});

	};


	/* Initialize
	 * ------------------------------------------------------ */
	(function ssInit() {

		clPreloader();
		clPrettyPrint();
		clMasonryFolio();
		clPlaceholder();
		clAlertBoxes();
	})();

})(jQuery);