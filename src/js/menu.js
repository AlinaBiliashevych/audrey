$(function () {
		 var clickOrTap = (typeof document.body.ontouchend === "undefined") 
			? 'click' 
       		: 'touchend';

		$("#phone-menu-open").on(clickOrTap, function () {
			toggleMenu();
		})

		$(document).on(clickOrTap, function(e) {
			if(!$(e.target).parents().hasClass("header")) {
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