$(function(){
	$('.carousel__list').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		appendDots: $('.carousel__controls-slick'),
		appendArrows: $('.carousel__arrow'),
		dotsClass: 'carousel__controls',
	});
});