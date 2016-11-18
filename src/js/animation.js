$(function() {
    	var controller = new ScrollMagic.Controller();
    	var scene = new ScrollMagic.Scene({
    		triggerElement: ".js-scene-1",
    		duration: 0,
    		triggerHook: 0.8,
    		offset: 0,
        reverse: false
    	})
		.setClassToggle('.js-scene-1 .image__mask', 'mask')
		.addIndicators()
		.on("progress", function (e) {
			console.log(e.progress.toFixed(3));
		})
		.addTo(controller);
});

$(function() {
    var controller = new ScrollMagic.Controller();
    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".js-scene-1",
      duration: 0,
      triggerHook: 0.8,
      offset: 0,
      reverse: false
    })
  .setClassToggle('.js-scene-1 .image__overlay', 'show')
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
		.setClassToggle('.js-scene-2 .image__mask', 'mask')
		.addTo(controller);
});

$(function() {
    var controller = new ScrollMagic.Controller();
    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".js-scene-2",
      duration: 0,
      triggerHook: 0.8,
      offset: 0,
      reverse: false
    })
  .setClassToggle('.js-scene-2 .image__overlay', 'show')
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
		.setClassToggle('.js-scene-3 .image__mask--right', 'mask--right')
		.addTo(controller);
});

$(function() {
    var controller = new ScrollMagic.Controller();
    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".js-scene-3",
      duration: 0,
      triggerHook: 0.8,
      offset: 0,
      reverse: false
    })
  .setClassToggle('.js-scene-3 .image__overlay', 'show')
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
		.setClassToggle('.js-scene-3-2 .image__mask', 'mask')
		.addTo(controller);
});

$(function() {
    var controller = new ScrollMagic.Controller();
    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".js-scene-3-2",
      duration: 0,
      triggerHook: 0.8,
      offset: 0,
      reverse: false
    })
  .setClassToggle('.js-scene-3-2 .image__overlay', 'show')
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
		.setClassToggle('.js-scene-4 .image__mask', 'mask')
		.addTo(controller);
});

$(function() {
    var controller = new ScrollMagic.Controller();
    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".js-scene-4",
      duration: 0,
      triggerHook: 0.8,
      offset: 0,
      reverse: false
    })
  .setClassToggle('.js-scene-4 .image__overlay', 'show')
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
		.setClassToggle('.js-scene-5 .image__mask', 'mask')
		.addTo(controller);
});

$(function() {
    var controller = new ScrollMagic.Controller();
    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".js-scene-5",
      duration: 0,
      triggerHook: 0.8,
      offset: 0,
      reverse: false
    })
  .setClassToggle('.js-scene-5 .image__overlay', 'show')
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
		.setClassToggle('.js-scene-6 .image__mask--right', 'mask--right')
		.addTo(controller);
});

$(function() {
    var controller = new ScrollMagic.Controller();
    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".js-scene-6",
      duration: 0,
      triggerHook: 0.8,
      offset: 0,
      reverse: false
    })
  .setClassToggle('.js-scene-6 .image__overlay', 'show')
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
		.setClassToggle('.js-scene-7 .image__mask', 'mask')
		.addTo(controller);
});

$(function() {
    var controller = new ScrollMagic.Controller();
    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".js-scene-7",
      duration: 0,
      triggerHook: 0.8,
      offset: 0,
      reverse: false
    })
  .setClassToggle('.js-scene-7 .image__overlay', 'show')
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
		.setClassToggle('.js-scene-8 .image__mask--left', 'mask')
		.addTo(controller);
});

$(function() {
    var controller = new ScrollMagic.Controller();
    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".js-scene-8",
      duration: 0,
      triggerHook: 0.8,
      offset: 0,
      reverse: false
    })
  .setClassToggle('.js-scene-8 .image__overlay', 'show')
  .addTo(controller);
});

$(function() {
    	var controller = new ScrollMagic.Controller();
    	var scene = new ScrollMagic.Scene({
    		triggerElement: ".js-scene-8",
    		duration: 0,
    		triggerHook: 0.8,
    		offset: 0,
        reverse: false
    	})
		.setClassToggle('.js-scene-8 .image__mask--right', 'mask--right')
		.addTo(controller);
});

$(function() {
    var controller = new ScrollMagic.Controller();
    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".js-scene-8",
      duration: 0,
      triggerHook: 0.8,
      offset: 0,
      reverse: false
    })
  .setClassToggle('.js-scene-8 .image__overlay', 'show')
  .addTo(controller);
});
