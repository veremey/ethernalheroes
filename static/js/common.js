$(document).ready(function() {

	// -------------- header -----------------
	$('.btn-toggler').on('click', function () {
		$(this).toggleClass('is-active').parents('header').toggleClass('is-open').find('.header__wrap').toggleClass('is-open');
	});

});
	/*--------------------------------------------------------------------*/
