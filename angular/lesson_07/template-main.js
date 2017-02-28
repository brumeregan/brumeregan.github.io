var app = angular.module('app', []);

app.run(function($templateCache){
	$templateCache.put('bookmarks.html', '<div ng-repeat="bookmark in bookmarks">{{bookmark.name}}</div>');
});

app.directive('fooBar', function($templateCache){

	var bookmarks = [
		{
			id: '1',
			name: 'Angular'
		},
		{
			id: '2',
			name: 'React'
		},
		{
			id: '3',
			name: 'Ember'
		}
	]
	return{
		restrict: 'E',
		templateUrl: 'bookmarks.html',
		link: function(scope, element, attrs){
			scope.bookmarks = bookmarks;
			console.log($templateCache.info())
		}
	}
});