$(function () {
		$("#show-comments").on("click", function(e) {
			$(".comments-block-wrapper").toggleClass('visible');
		})

		$(document).on("click", function(e) {
			if(!$(e.target).parents().hasClass("comments-block-wrapper") 
				&& $(".comments-block-wrapper").hasClass("visible")
				&& !$(e.target).is("#show-comments")) {
				$(".comments-block-wrapper").toggleClass('visible');
			}
		})
})