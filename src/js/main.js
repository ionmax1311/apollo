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
	});
})(jQuery);

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
});

// $("#dashboard-table_wrapper  .row:nth-child(3)").append(
// 	"<a href='#'>show more</a>",
// );
$("#dashboard-table_wrapper>.row:nth-child(3)").append("<div>more</div>");
