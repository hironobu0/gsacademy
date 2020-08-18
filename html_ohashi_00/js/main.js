// jsを記述する際はここに記載していく

(function ($) {
	$(function () {
		$('#loopSlide ul').simplyScroll({
			auto: true,
			autoMode: 'loop',
			speed: 2,
			frameRate: 24,
			horizontal: true,
			pauseOnHover: false,
			pauseOnTouch: false
		});

	});
})(jQuery);