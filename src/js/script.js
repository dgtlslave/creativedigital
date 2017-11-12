//=require jquery.min.js

// to inlude plugins add "=" sign below
// require bootstrap.min.js
//=require slick.min.js

;(function($){

	$(window).on('load', function() {
		$('.slider__list').slick({
			 infinite: true,
			 speed: 500,
			 dots: true,
			 slidesToShow: 1,
			 centerMode: true,
			 variableWidth: true,
			 cssEase: 'linear',
			 arrows: true
		});
	});

})(jQuery);
