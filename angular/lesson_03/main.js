var app = angular.module('app', []);

app.controller('mainCtrl', function($scope){
this.myLesson = 'main lesson';
this.addLesson = function(){
	alert('add lesson');
}
$scope.mainCtrl = this;
});

app.controller('firstCtrl', function(){
this.myLesson = 'first lesson';
});

app.controller('secondCtrl', function(){
	this.myLesson = 'second lesson';
});