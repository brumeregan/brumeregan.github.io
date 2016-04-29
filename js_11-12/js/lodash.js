
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

	var tmpl = _.template(document.getElementById('template').innerHTML);

	var result = tmpl(info);

	document.write(result);
