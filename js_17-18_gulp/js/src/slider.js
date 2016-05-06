/* mini preview for products */
'use strict';

$(function(){
	var $sliderBoxes = $('.products__slider');
	$sliderBoxes.on('click', function(e){
		e.preventDefault();
		var target = e.target;
		if($(target).hasClass('slider__thumbs-img')){
			var $targetParent = $(target).parent();
			showImg($targetParent);
		}

		if (target.tagName == 'A'){
			showImg(target);
		}

		function showImg(targetA){
			if(targetA.get(0).tagName == 'A'){
				var $imgHref = targetA.attr('href');
				var $stage = targetA.parent()
													.parent()
													.prev()
													.children().eq(0);
				$stage.attr('src', $imgHref);
				return false;
			}
		}
	});
});