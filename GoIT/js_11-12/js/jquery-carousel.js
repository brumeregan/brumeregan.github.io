
;(function($){
	$.fn.carousel = function(options){

		var defaults = {
			speed: 1000
		};

		var settings = $.extend(defaults, options);

		var $arrowLeft = $('.carousel-arrow-left');
		var $arrowRight = $('.carousel-arrow-right');
		var $elemList = $(this);

		var $parentWidth = $elemList.parent().outerWidth();

		$('li').eq(0).find('img').load(function(){
			var $elemChildrenWidth = $('.carousel-element', $elemList).outerWidth(true);

			//widh of element li plus margin-left-right
			var $offset = $elemChildrenWidth;

			var $currentLeft = 0;

			var $elemCount = $elemList.find('li').length;

			/* count number of visible items
			** widthOuterContainer / outerWidthLI
			 */

			var $countVisibleItem = $parentWidth / $elemChildrenWidth;

			var $minOffset = -(($elemCount - $countVisibleItem) * $offset);
			var $maxOffset = 0;

			$arrowLeft.on('click', function(){
				if($currentLeft != $maxOffset){
				$currentLeft += $offset;
				$elemList.animate({
					left: $currentLeft + 'px'
				}, settings.speed);
			}
			});

			$arrowRight.on('click', function(){
				if($currentLeft != $minOffset){
					$currentLeft -= $offset;
					$elemList.animate({
						left: $currentLeft + 'px'
					}, settings.speed);
				}
				
			});

		});

		return this;

	}

})(jQuery);