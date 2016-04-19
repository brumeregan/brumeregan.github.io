'use strict';
$(function(){

	// function of connection
	var connector = function(itemNav, itemMain){
		return itemMain.jcarousel('items').eq(itemNav.index());
	}

	// init carousels
	
	var carouselMain = $('.carousel__main-carousel').jcarousel();
	var carouselNav = $('.carousel__nav-carousel').jcarousel();

	carouselNav.jcarousel('items').each(function(){
		var item = $(this);

		var target = connector(item, carouselMain);

		item.on('jcarouselcontrol:active', function(){
			carouselNav.jcarousel('scrollIntoView', this);
			$(this).addClass('active');
		})
		.on('jcarouselcontrol:inactive', function(){
			item.removeClass('active');
		})
		.jcarouselControl({
			target: target,
			carousel: carouselMain
		});
	});

	$('.carousel-prev').jcarouselControl({
			target: '-=1',
			carousel: carouselMain
	});


	$('.carousel-next').jcarouselControl({
			target: '+=1',
			carousel: carouselMain
	});

	$('#select').selectbox();


	// navigation


	/* 
	** hide all dropdown ul's
	*/
	$('li').children('ul').css('display', 'none');

	/*
	** show ul by hovering on specific li item
	*/

	$('.dropdown').on({
		mouseleave: hideDropdown,
		mouseenter: showDropdown,
		click: function(event){
			event.preventDefault();
		}
	});

	function showDropdown(){
		$(this).children('ul').slideDown('slow', function(){
			$(this).animate({
				backgroundColor: 'rgba(38, 38, 38, 1)',
				'z-index': '+=10'
			});
		});
	}

	function hideDropdown(){
		$(this).children('ul').slideUp('fast', function(){
			$(this).animate({
				backgroundColor: 'rgba(38, 38, 38, 0.6)',
				'z-index': '-=10'});
		});
	}

	// jquery checkbox styles

	$('.jquery__checkbox').on('click', function(){
		changeCheckbox($(this));
	})

	function changeCheckbox(elem){
		var input = elem.find('input').eq(0);
		if( !input.attr('checked')){
			elem.css('background-position', '0 -17px');
			input.attr('checked', true);
		}else{
			elem.css('background-position', '0px 0px');
			input.attr('checked', false);
		}
		return true;
	}

	/* adding custom styles to checkboxes
	 ** just after loading page
	*/
	$('.jquery__checkbox').each(function(){
		changeCheckboxCondition($(this));
	});

	function changeCheckboxCondition(elem){
		var input = elem.find('input').eq(0);
		if(input.attr('checked')){
			elem.css('background-position', '0px -17px');
		}
		return true;
	}

});