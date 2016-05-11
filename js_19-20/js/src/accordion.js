$(function(){
	var $accordionLink = $('.accordion__item-title');
	var $accordionContent = $('.accordion__content');
	$accordionContent.hide();
	$('.accordion__active + .accordion__content').show();
	$accordionLink.on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('accordion__active')
						.next()
						.slideToggle();
	});
});