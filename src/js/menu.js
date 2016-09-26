$(function () {
		var clickOrTap = (typeof document.body.ontouchend === "undefined") 
			? 'click' 
       		: 'touchend';
       	var MAX_PTAB_WIDTH = 1023;

		$("#phone-menu-open").on(clickOrTap, function () {
			toggleMenu();
		})

		$(document).on(clickOrTap, function(e) {
			if(!$(e.target).parents().hasClass("header") 
				&& $("#phone-menu-open").hasClass("is-active")
				&& $(window).width() < MAX_PTAB_WIDTH) {
				toggleMenu();
			}
		})

		function toggleMenu() {
			$("#phone-menu-open").toggleClass("is-active");
			$(".header__menu").toggleClass('opened');
			$(".overlay").toggleClass('visible');
			$("body").toggleClass('no-scroll');
		}
})