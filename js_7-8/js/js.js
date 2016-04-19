'use strict';
$(function () {
	//tabs
	$('.tab__item:first-child').show();
	$('.tabs__navigation a').on('click', function(e){
		e.preventDefault();
		$(e.target).closest('li')
							.addClass('tabs__active')
							.siblings()
							.removeClass('tabs__active');
		var $targetTab = $(e.target).attr('href');
		$($targetTab).fadeIn('slow').siblings().hide();
	});

	// tooltips
	$('[data-tooltip]').on({
		'mouseenter': showTooltip,
		'mouseleave': hideTooltip,
		'focus': showTooltip,
		'blur': hideTooltip
	});
	
	function showTooltip(){
		/*jshint validthis:true */
		var $dataTooltip = $(this).attr('data-tooltip');
		$('body').append('<p class="tooltip">' + $dataTooltip + '</p>');
		var $right = $(this).position().left + $(this).width();
		var $top = $(this).position().top - Math.abs( ($(this).outerHeight() - $('.tooltip').outerHeight() ) / 2);
		$('.tooltip').css({
											"top": $top + 5 + 'px',
											"left": $right + 40 + 'px'})
								.fadeIn('slow');
	}
	function hideTooltip(){
					$('.tooltip').remove();
	}
});