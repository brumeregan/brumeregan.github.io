'use strict';

var generateHtml = {
	titleQuest: "Тест по программированию",
	questions: [
		{
			title: "Вопрос №1",
			answers: [
				{
					text: "Вариант ответа №1",
					correct: true
				},
				{
					text: "Вариант ответа №2",
					correct: false
				},
				{
					text: "Вариант ответа №3",
					correct: false
				}
			]
		},
		{
			title: "Вопрос №2",
			answers: [
				{
					text: "Вариант ответа №2-1",
					correct: true
				},
				{
					text: "Вариант ответа №2-2",
					correct: false
				},
				{
					text: "Вариант ответа №2-3",
					correct: false
				}
			]
		},
		{
			title: "Вопрос №3",
			answers: [
				{
					text: "Вариант ответа №1",
					correct: true
				},
				{
					text: "Вариант ответа №2",
					correct: false
				},
				{
					text: "Вариант ответа №3",
					correct: false
				}
			]
		}
	],

	init: function(){
		var container = document.body.appendChild(this.createContainer());
		var row = container.appendChild(this.createRow());
		var col = row.appendChild(this.createCol());
		col.appendChild(this.createTitle());
		col.appendChild(this.createQuestion());
		col.appendChild(this.createButton());
	},

	createQuestion: function () {
		var quest__container = this.createElement('div', 'quest__container');
		for (var i = 0; i < this.questions.length; i++) {
			var quest__item = this.createElement('div');
			var questTitle = this.createElement('h3', 'quest__title', this.questions[i].title);
			quest__item.appendChild(questTitle);
			quest__container.appendChild(quest__item);
			for (var k = 0; k < this.questions[i].answers.length; k++) {
				var num = +i + 1 + '_' + (+k + 1);
				var box = this.createElement('div', 'checkbox', null);
				var labelElem = this.createElement('label', null, this.questions[i].answers[k].text);
				var inputElem = this.createElement('input');
				inputElem.type = 'checkbox';
				inputElem.setAttribute('id', 'checkbox_' + num);
				labelElem.insertAdjacentElement('afterBegin', inputElem);
				box.insertAdjacentElement('beforeEnd', labelElem);
				quest__item.appendChild(box);
			}
			var line = this.createElement('hr');
			quest__item.insertAdjacentElement('afterEnd', line);
		}
		return quest__container;
	},

	createElement: function (tag, className, text) {
		var elem = document.createElement(tag);
		if (className) elem.className = className;
		if (text) elem.innerHTML = text;
		return elem;
	},

	createContainer: function(){
		var container = this.createElement('div', 'container');
		return container;
	},

	createRow: function(){
		var row = this.createElement('div', 'row');
		return row;
	},

	createCol: function(){
		var col = this.createElement('div', 'col-md-6 col-md-offset-3');
		return col;
	},

	createTitle: function(){
		var title = this.createElement('h2', 'text-center', this.titleQuest);
		return title;
	},

	createButton: function () {
		var button = this.createElement('button', 'btn btn-primary center-block', 'Проверить мои результаты');
		return button;
	}
};


generateHtml.init();