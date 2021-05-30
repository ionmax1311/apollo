$(".password-icon").click(function () {
	let type = $(this).prev(".password").attr("type");
	if (type === "password") {
		$(this).prev(".password").attr("type", "text");
	} else {
		$(this).prev(".password").attr("type", "password");
	}
});

$(".form-check label").click(function () {
	if ($(".form-check input").is(":checked")) {
		$(".btn-submit").addClass("disabled");
	} else {
		$(".btn-submit").removeClass("disabled");
	}
});
