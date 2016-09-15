$(function () {
		$("#phone-menu-open").on('click', function () {
			$(this).toggleClass("is-active");
			$(".header__menu").toggleClass('opened');
			$(".overlay").toggleClass('visible');
		})
})