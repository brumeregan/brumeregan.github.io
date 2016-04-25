'use strict';

var data = {
	"title": "Тест 1",
	"questions": [ 
		{ 
			
			"title": "Столица Испании",
			"answers": [
				{
					
					"text": "Мадрид",
					"correct": true
				},
				{
					
					"text": "Париж",
					"correct": false
				},
				{
					
					"text": "Лондон",
					"correct": false
				}
			]
		},
		{
			
			"title": "Сколько метров в киллометре",
			"answers": [
				{
				
					"text": "1000",
					"correct": true
				},
				{
					
					"text": "100",
					"correct": false
				},
				{
	
					"text": "10",
					"correct": false
				}
			]
		},
		{

			"title": "Что такое ПДД",
			"answers": [
				{
		
					"text": "Правила дорожного движения",
					"correct": true
				},
				{
					
					"text": "Чьи-то инициалы",
					"correct": false
				},
				{
					
					"text": "Химическое соединение",
					"correct": false
				}
			]
		}
	]};

var info = JSON.stringify(data);
var buttonLocal = document.getElementById('local');
// var buttonClear = document.getElementById('clear');
buttonLocal.addEventListener('click', function(e){
	e.preventDefault();
	try{
		localStorage.setItem("test", info);
		window.alert("Закешировалось");
	}catch(error){
		window.alert('что-то пошло не так по причине' + error + error.message);
	}
});