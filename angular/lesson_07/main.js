var app = angular.module('app', []);

app.directive('foo', function(){
	return{
		link: function(scope, element, attr){
			element.on('click', function(){
				if( element.text() === 'foo'){
					element.text('bar');
				} else{
					element.text('foo');
				}
			});
		}
	}
});