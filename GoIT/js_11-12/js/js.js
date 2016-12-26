$(function(){
	$('#mycarousel').carousel({
		speed: 500
	});

	var template = $('#template').html();

	var info = {
			"name": {
					"first": "Оксана",
					"middle": "Александровна",
					"last": "Боярко"
			},
			"occupation": "Экономист/менеджер ВЭД",
			"motivation": [
					"IT - это очень интересно!",
					"возможность постоянно узнавать новое",
					"Очень нравятся красивые интерактивные сайты, хочу такие же научиться делать!",
					"Это достаточно прибыльно, если не лажать и делать все правильно :)"
			],
			"telephone": "380508018187",
			"social_fb": "http://facebook.com/oksana.boyarko",
			"feedback": "Очет крутой курс!"
		};

	var content = tmpl(template, info);

	$('body').append(content);


/* обработчик событий на кнопки*/

var $buttonFirst = $('#first-part');
var $buttonSecond = $('#second-part');
var $carouselBlock = $('.carousel-block');
var $templateBlock = $('.about');

$buttonFirst.click(function(){
	$carouselBlock.slideToggle();
});

$buttonSecond.click(function(){
	$templateBlock.slideToggle();
});

});