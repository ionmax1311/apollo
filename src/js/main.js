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
});


// $("#dashboard-table_wrapper>.row:nth-child(3)").append("<div>more</div>");

// $('#sidebar .inner ul a').click(function () {
// 	$('#sidebar a').removeClass('active')
// 	$(this).addClass('active')
// })


