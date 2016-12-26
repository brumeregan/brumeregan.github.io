var app = angular.module('app', []);

app.controller('mainCtrl', function($scope){
	$scope.money1 = '244$';
	$scope.money2 = '$122';
	$scope.money3 = '444';
});

app.filter('moneyFilter', function(){
	return function(str){
		var lastChar = str.slice(-1);
		var firstChar = str.slice(0, 1);
		var slicedPart;

		if(lastChar ==='$'){
			return str;
		} else if( firstChar === '$'){
			slicedPart = str.slice(0, 1);
			return str + '$';
		} else{
			return str + '$';
		}

	}
});