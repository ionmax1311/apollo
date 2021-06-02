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

		$(this).attr('checked', true);
		$(this).val(1);
		console.log('checked---', $(this).val());
	} else {
		$(this).attr('checked', false);
		$(this).val(0);
		console.log('not checked---', $(this).val());
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

// $("#dashboard-table_wrapper>.row:nth-child(3)").append("<div>more</div>");

// $('#sidebar .inner ul a').click(function () {
// 	$('#sidebar a').removeClass('active')
// 	$(this).addClass('active')
// })

// $(document).ready(function () {
// 	console.log($(".wrapper").hasClass("dashboard-active"));
// 	if ($(".wrapper").hasClass("dashboard-active")) {
// 		$(".inner a").removeClass("active");
// 		$(".inner").find('a:contains("Dashboard")');

// 		console.log(1);
// 	} else if ($(".wrapper").hasClass("order-history-active")) {
// 		$(".inner a").removeClass("active");
// 		$(".inner").find('a:contains("Order History")');

// 		console.log(2);
// 	}
// });

$(".slider-card").slick({
	// autoplay: true,
	// autoplaySpeed: 1000,
	// asNavFor: ".slider-poster-nav",
	// centerPadding: "60px",
	// slidesToShow: 4,
	// slidesToScroll: 1,
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
