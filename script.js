$("#slideshow > div:gt(0)").hide();

function showNextSlide() {
	var firstSlide = $('#slideshow > div:first');
	firstSlide.fadeIn(2000, function () {
		setTimeout(function () {
			firstSlide.fadeOut(2000, function () {
				firstSlide.appendTo("#slideshow"); // move the first slide to the end of #slideshow
				showNextSlide();
			});
		}, 5000);
	});
}

showNextSlide();









