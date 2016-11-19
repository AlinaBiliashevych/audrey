$(function() {
    	var controller = new ScrollMagic.Controller();
    	var scene = new ScrollMagic.Scene({
    		triggerElement: ".js-scene-0",
    		duration: 0,
    		triggerHook: 0.8,
    		offset: 0,
        reverse: false
    	})
		.setClassToggle('.js-scene-0', 'animate')
		.addTo(controller);
});
/*============================S1================================*/
$(function() {
    	var controller = new ScrollMagic.Controller();
    	var scene = new ScrollMagic.Scene({
    		triggerElement: ".js-scene-1",
    		duration: 0,
    		triggerHook: 0.8,
    		offset: 0,
        reverse: false
    	})
		.setClassToggle('.js-scene-1', 'animate')
		.addIndicators()
		.on("progress", function (e) {
			console.log(e.progress.toFixed(3));
		})
		.addTo(controller);
});
/*========================S2=================================*/
$(function() {
    	var controller = new ScrollMagic.Controller();
    	var scene = new ScrollMagic.Scene({
    		triggerElement: ".js-scene-2",
    		duration: 0,
    		triggerHook: 0.8,
    		offset: 0,
        reverse: false
    	})
		.setClassToggle('.js-scene-2', 'animate')
		.addTo(controller);
});

/*==========================S3==============================*/
$(function() {
    	var controller = new ScrollMagic.Controller();
    	var scene = new ScrollMagic.Scene({
    		triggerElement: ".js-scene-3",
    		duration: 0,
    		triggerHook: 0.8,
    		offset: 0,
        reverse: false
    	})
		.setClassToggle('.js-scene-3', 'animate')
		.addTo(controller);
});
/*==========================S3-1==============================*/
$(function() {
    	var controller = new ScrollMagic.Controller();
    	var scene = new ScrollMagic.Scene({
    		triggerElement: ".js-scene-3-1",
    		duration: 0,
    		triggerHook: 0.8,
    		offset: 0,
        reverse: false
    	})
		.setClassToggle('.js-scene-3-1', 'animate')
		.addTo(controller);
});
/*==========================S3-2==============================*/
$(function() {
    	var controller = new ScrollMagic.Controller();
    	var scene = new ScrollMagic.Scene({
    		triggerElement: ".js-scene-3-2",
    		duration: 0,
    		triggerHook: 0.8,
    		offset: 0,
        reverse: false
    	})
		.setClassToggle('.js-scene-3-2', 'animate')
		.addTo(controller);
});
/*========================S4=================================*/
$(function() {
    	var controller = new ScrollMagic.Controller();
    	var scene = new ScrollMagic.Scene({
    		triggerElement: ".js-scene-4",
    		duration: 0,
    		triggerHook: 0.8,
    		offset: 0,
        reverse: false
    	})
		.setClassToggle('.js-scene-4', 'animate')
		.addTo(controller);
});
/*========================S5=================================*/
$(function() {
    	var controller = new ScrollMagic.Controller();
    	var scene = new ScrollMagic.Scene({
    		triggerElement: ".js-scene-5",
    		duration: 0,
    		triggerHook: 0.8,
    		offset: 0,
        reverse: false
    	})
		.setClassToggle('.js-scene-5', 'animate')
		.addTo(controller);
});
/*==========================S6==============================*/
$(function() {
    	var controller = new ScrollMagic.Controller();
    	var scene = new ScrollMagic.Scene({
    		triggerElement: ".js-scene-6",
    		duration: 0,
    		triggerHook: 0.8,
    		offset: 0,
        reverse: false
    	})
		.setClassToggle('.js-scene-6', 'animate')
		.addTo(controller);
});
/*==========================S7==============================*/
$(function() {
    	var controller = new ScrollMagic.Controller();
    	var scene = new ScrollMagic.Scene({
    		triggerElement: ".js-scene-7",
    		duration: 0,
    		triggerHook: 0.8,
    		offset: 0,
        reverse: false
    	})
		.setClassToggle('.js-scene-7', 'animate')
		.addTo(controller);
});
/*==========================S8==============================*/
$(function() {
    	var controller = new ScrollMagic.Controller();
    	var scene = new ScrollMagic.Scene({
    		triggerElement: ".js-scene-8",
    		duration: 0,
    		triggerHook: 0.8,
    		offset: 0,
        reverse: false
    	})
		.setClassToggle('.js-scene-8', 'animate')
		.addTo(controller);
});

/*==========================title==============================*/
$(function() {
    	var controller = new ScrollMagic.Controller();
    	var scene = new ScrollMagic.Scene({
    		triggerElement: ".title--bio h2",
    		duration: 0,
    		triggerHook: 0.6,
    		offset: 0,
        reverse: false
    	})
		.setClassToggle('.title--bio', 'title--animate')
		.addTo(controller);
});
$(function() {
    	var controller = new ScrollMagic.Controller();
    	var scene = new ScrollMagic.Scene({
    		triggerElement: ".title--film h2",
    		duration: 0,
    		triggerHook: 0.6,
    		offset: 0,
        reverse: false
    	})
		.setClassToggle('.title--film', 'title--animate')
		.addTo(controller);
});
$(function() {
    	var controller = new ScrollMagic.Controller();
    	var scene = new ScrollMagic.Scene({
    		triggerElement: ".title--secret h2",
    		duration: 0,
    		triggerHook: 0.6,
    		offset: 0,
        reverse: false
    	})
		.setClassToggle('.title--secret', 'title--animate')
		.addTo(controller);
});
$(function() {
    	var controller = new ScrollMagic.Controller();
    	var scene = new ScrollMagic.Scene({
    		triggerElement: ".title--awards h2",
    		duration: 0,
    		triggerHook: 0.6,
    		offset: 0,
        reverse: false
    	})
		.setClassToggle('.title--awards', 'title--animate')
		.addTo(controller);
});
