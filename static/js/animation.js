var Animation = new AnimationClass();

function AnimationClass() {
	var globalScope = this;

	/*--- global animations init ---*/
	/*---------------------------------------------------------------------*/
	this.initGlobalAnimations = function(opt) {
		var controller = new ScrollMagic.Controller();

		var $container = $(opt.container);

		var selfTriggeredElems = opt.selfTriggeredElems;

		if($container.hasClass('is-animated')) {
			$.each(selfTriggeredElems, function(index, value) {
				$(value.selector).each(function() {
					new ScrollMagic.Scene({triggerElement: this, triggerHook: value.triggerHook, reverse: false})
						.setClassToggle(this, value.class)
						.addTo(controller);
				});
			});
		}
	}

	/* --- parallax scrollMagic init ---*/
	/*--------------------------------------------------------------------*/
	this.initParallax = function(opt) {
		var $window = $(window);
		// var $hasClass = $(opt.hasClass);
		// var $height = -$(opt.height).outerHeight(true);
		// var $duration = opt.duration;
		var controller = new ScrollMagic.Controller();

		$(window).on("scroll", function() {
		    controller.update(true);
		});


		$(".parallax__bg").each(function(index, elem) {
			var $this = $(this);
			var $parent = $this.parent(); //must use as triggerElement
			var tween = TweenMax.from(elem, 1, {
				y: '-50%',
				ease: Power0.easeNone
			});

			new ScrollMagic.Scene({
					triggerElement: $parent.get(0),
					triggerHook: "onEnter",
					duration: "200%"
				})
				.setTween(tween)
				// .addIndicators()
				.addTo(controller);
		});
	} //initParallax

}