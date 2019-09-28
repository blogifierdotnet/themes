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


	/* Mobile Menu
	 * ---------------------------------------------------- */
	var clMobileMenu = function () {

		var navWrap = $('.header__nav-wrap'),
			closeNavWrap = navWrap.find('.header__overlay-close'),
			menuToggle = $('.header__toggle-menu'),
			siteBody = $('body');

		menuToggle.on('click', function (e) {
			var $this = $(this);

			e.preventDefault();
			e.stopPropagation();
			siteBody.addClass('nav-wrap-is-visible');
		});

		closeNavWrap.on('click', function (e) {

			var $this = $(this);

			e.preventDefault();
			e.stopPropagation();

			if (siteBody.hasClass('nav-wrap-is-visible')) {
				siteBody.removeClass('nav-wrap-is-visible');
			}
		});

		// open (or close) submenu items in mobile view menu. 
		// close all the other open submenu items.
		$('.header__nav .has-children').children('a').on('click', function (e) {
			e.preventDefault();

			if ($(".close-mobile-menu").is(":visible") == true) {

				$(this).toggleClass('sub-menu-is-open')
					.next('ul')
					.slideToggle(200)
					.end()
					.parent('.has-children')
					.siblings('.has-children')
					.children('a')
					.removeClass('sub-menu-is-open')
					.next('ul')
					.slideUp(200);

			}
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


	/* Animate On Scroll
	 * ------------------------------------------------------ */
	var clAOS = function () {

		AOS.init({
			offset: -400,
			duration: 600,
			easing: 'ease-in-sine',
			delay: 100,
			once: true,
			disable: 'mobile'
		});

	};


	/* Initialize
	 * ------------------------------------------------------ */
	(function ssInit() {

		clPreloader();
		clPrettyPrint();
		clMobileMenu();
		clMasonryFolio();
		clPlaceholder();
		clAlertBoxes();
		clAOS();
	})();

})(jQuery);