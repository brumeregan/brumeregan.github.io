var app = angular.module('app', []);

app.controller('mainCtrl', function($scope){
	$scope.name = 'Bob';
});

app.directive('fooBar', function(){

	return{
		restrict: 'E',
		transclude: true,
		template: 'This is my directive <div ng-transclude></div>',
		link: function(scope, element, attr, ctrl, transclude){
		}
	}
});