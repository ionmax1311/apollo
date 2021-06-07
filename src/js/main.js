(function ($) {
	"use strict";

	var fullHeight = function () {
		$(".js-fullheight").css("height", $(window).height());
		$(window).resize(function () {
			$(".js-fullheight").css("height", $(window).height());
		});
	};
	fullHeight();

	$(".sidebarCollapse").on("click", function () {
		$("#sidebar").toggleClass("active");
		$("body").toggleClass("hidden");
		$(".overlay").toggleClass("active");
	});
	$(".panel-heading").on("click", function () {
		$(this).find(".fa-chevron-down").toggleClass("active");
	});
})(jQuery);

$("input[type=checkbox]").click(function () {
	if ($(this).is(":checked")) {
		$(this).attr("checked", true);
		$(this).val(1);
		console.log("checked---", $(this).val());
	} else {
		$(this).attr("checked", false);
		$(this).val(0);
		console.log("not checked---", $(this).val());
	}
});

$(document).ready(function () {
	$("#dashboard-table").DataTable({
		// info: false,
		language: {
			paginate: {
				previous: "<",
				next: ">",
			},
		},
	});
	$("#order-history-table-open").DataTable({
		info: false,
		language: {
			paginate: {
				previous: "<",
				next: ">",
			},
		},
	});
	$("#order-history-table-closed").DataTable({
		info: false,
		language: {
			paginate: {
				previous: "<",
				next: ">",
			},
		},
	});
	$("#payments-table").DataTable({
		info: false,
		language: {
			paginate: {
				previous: "<",
				next: ">",
			},
		},
	});
});

$(document).ready(function () {
	console.log($(".wrapper").hasClass("dashboard-active"));
	if ($(".wrapper").hasClass("dashboard-active")) {
		$(".inner a").removeClass("active");
		$(".inner").find('a:contains("Dashboard")').addClass("active");

		console.log(1);
	} else if ($(".wrapper").hasClass("order-history-active")) {
		$(".inner a").removeClass("active");
		$(".inner")
			.find('span:contains("Order History")')
			.parent("a.link")
			.addClass("active");

		console.log(2);
	} else if ($(".wrapper").hasClass("your-trades-active")) {
		$(".inner a").removeClass("active");
		$(".inner").find('a:contains("Your Trades")').addClass("active");
	} else if ($(".wrapper").hasClass("basic-information-active")) {
		$(".inner a").removeClass("active");
		$(".inner").find('a:contains("Basic Information")').addClass("active");
	} else if ($(".wrapper").hasClass("payments-active")) {
		$(".inner a").removeClass("active");
		$(".inner").find('a:contains("Payments")').addClass("active");
	} else if ($(".wrapper").hasClass("subscription-active")) {
		$(".inner a").removeClass("active");
		$(".inner").find('a:contains("Subscription")').addClass("active");
	}
});

$(".slider-card").slick({
	dots: false,
	arrows: true,
	infinite: true,
	appendArrows: ".card-slider-arrows",
	variableWidth: true,
	prevArrow:
		'<button id="prev" type="button" class=" btn-slider-card"><img src="img/arrow-sl-left.png" alt=""></button>',
	nextArrow:
		'<button id="next" type="button" class=" btn-slider-card"><img src="img/arrow-sl-right.png" alt=""></button>',
	responsive: [
		{
			breakpoint: 1300,
			settings: {
				// arrows: true,

				// centerPadding: "40px",
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 992,
			settings: {
				arrows: true,
				slidesToShow: 2,
			},
		},
	],
});
