requirejs.config({
	"baseUrl": "./js",
	"paths": {
		'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1.12.3/jquery.min',
		'lodash': 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.12.0/lodash.min'
	}
});

require(
	[
	'jquery',
	'lodash',
	'./src/model',
	'./src/view',
	'./src/controller'	
	
	],
	function($, _, Model, View, Controller){

		$(function(){

			var listTodo = ['Учить CSS', 'Выучить Javascript', 'Изучить AngularJS'];

			var model = new Model(listTodo);
			var view = new View(model);
			var controller = new Controller(model, view);
		});
	}
);