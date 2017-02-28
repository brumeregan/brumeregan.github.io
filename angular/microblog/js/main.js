var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'home.html',
			controller: 'homeCtrl'
		})
		.when('/posts', {
			templateUrl: 'posts.html',
			controller: 'postsCtrl'
		})
		.when('/posts/:postId', {
			templateUrl: 'post.html',
			controller: 'postCtrl'
		})
		.otherwise({
			template: '<h1> 404 Page not found</h1>'
		});
});

app.controller('homeCtrl', function($scope){
	$scope.model = {
		message: "this is my beautiful homepage"
	}
});

app.controller('postsCtrl', function($scope, postsFactory){
	$scope.posts = postsFactory;
});

app.controller('postCtrl', function($scope, $routeParams, postsFactory){
	var postId = Number($routeParams.postId);
	$scope.post = _.findWhere(postsFactory, {id: postId});

});

app.factory('postsFactory', function(){
	return [
		{
			id: 1,
			name: 'Why AngularJS is good?',
			article: 'post 1 lorem ipsum'
		},
		{
			id: 2,
			name: 'I love AngularJS',
			article: 'post 2 lorem ipsum'
		},
		{
			id: 3,
			name: 'Is AngularJS easy to learn',
			article: 'post 3 lorem ipsum'
		}
	]
});

