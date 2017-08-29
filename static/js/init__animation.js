$(function () {

	$(window).on('load', function() {
		/*--- global animations init ---*/
		/*---------------------------------------------------------------------*/
		Animation.initGlobalAnimations({
			container: 'body',
			selfTriggeredElems: {
				el1: {
					selector: '.header',
					triggerHook: 1,
					class: 'is-animated'
				}
			}
		});
		Animation.initGlobalAnimations({
			container: '.intro',
			selfTriggeredElems: {
				el1: {
					selector: '.logo',
					triggerHook: 1,
					class: 'is-animated'
				},
				el2: {
					selector: '.intro__desc',
					triggerHook: 1,
					class: 'is-animated'
				}
			}
		});
		Animation.initGlobalAnimations({
			container: '.play',
			selfTriggeredElems: {
				el1: {
					selector: '.play__pic',
					triggerHook: 0.9,
					class: 'is-animated'
				},
				el2: {
					selector: '.play__text',
					triggerHook: 0.9,
					class: 'is-animated'
				}
			}
		});
		Animation.initGlobalAnimations({
			container: '.about',
			selfTriggeredElems: {
				el1: {
					selector: '.card',
					triggerHook: 0.9,
					class: 'is-animated'
				}
			}
		});
		Animation.initGlobalAnimations({
			container: '.features',
			selfTriggeredElems: {
				el1: {
					selector: '.module__item',
					triggerHook: 0.9,
					class: 'is-animated'
				}
			}
		});
		Animation.initGlobalAnimations({
			container: '.roadmap',
			selfTriggeredElems: {
				el1: {
					selector: '.road__box',
					triggerHook: 0.9,
					class: 'is-animated'
				}
			}
		});
		Animation.initGlobalAnimations({
			container: '.team',
			selfTriggeredElems: {
				el1: {
					selector: '.people',
					triggerHook: 0.9,
					class: 'is-animated'
				}
			}
		});


		Animation.initGlobalAnimations({
			container: '.partners',
			selfTriggeredElems: {
				el1: {
					selector: '.partners-header',
					triggerHook: 0.9,
					class: 'is-animated'
				},
				el2: {
					selector: '.partners-content',
					triggerHook: 0.9,
					class: 'is-animated'
				}
			}
		});
		/*--- num animations init ---*/
		/*---------------------------------------------------------------------*/
		Animation.initNumAnimations({
			container: '.article-section-table',
			label: '.article-section-table-num',
			num: '.article-section-table-num .item'
		});
		/* --- scroll ---*/
		/*--------------------------------------------------------------------*/

		// Animation.initScroll({
		// 	scrollBox: '.ui-dialog'
		// });

	});

	/*--- parallax ---*/
	/*---------------------------------------------------------------------*/
	Animation.initParallax();



});

