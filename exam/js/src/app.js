requirejs.config({
	"baseUrl": "./js/src",
	"paths": {
		'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1.12.3/jquery.min',
		'lodash': 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.12.0/lodash.min'
	}
});

require(
	[
	'jquery',
	'lodash',
	'./model',
	'./view'	
	
	],
	function($, _, Model, View){

		$(function(){
			// var beginWord = '';

			var model = new Model('', view);
			var view = new View(model);
			// var controller = new Controller(model, view);
			
		});
	}
);