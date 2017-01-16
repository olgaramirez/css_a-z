/*jslint sloppy: true*/

(function ($) {
	// "use strict";
	
	$.generateAnchorMenu = function () {
		$(document).find("h3").each(function (index, element) {
			var $link = $("<li>" +
				"<a href=\"#" + $(this).closest("dt").attr("id") + "\">" + $(this).attr("data-title") + "</a>" +
				"</li>");

			$link.find("a").smoothScroll();

			$("nav").append($link);
		});
	};

	$.fn.smoothScroll = function () {
		this.click(function (event) {
			event.preventDefault();
			var id = $(this).attr("href");
			$('html, body').animate({
				scrollTop: $(id).offset().top
			}, 'slow');
			return false;
		});
	};

}(jQuery));


$(document).ready(function (e) {

	$.generateAnchorMenu();

	$('#toTop a').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 'slow');
		return false;
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > $("h1").height() - 30) {
			$('#toTop:hidden').stop(true, true).fadeIn();
		} else {
			$('#toTop').stop(true, false).fadeOut("fast");
		}
	});
	
});