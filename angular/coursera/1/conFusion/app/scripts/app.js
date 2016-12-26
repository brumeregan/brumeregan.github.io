var app = angular.module('confusionApp', []);
console.log('connect');
app.controller('contactCtrl', function($scope){
	console.log('contactCtrl');
	$scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
  var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
  $scope.channels = channels;
  $scope.invalidChannelSelection = false;


});

app.controller('feedbackCtrl',function($scope){
	$scope.sendFeedback = function() {
        if ($scope.feedback.agree && ($scope.feedback.mychannel == "")&& !$scope.feedback.mychannel) {
          $scope.invalidChannelSelection = true;
        }
        else {
          $scope.invalidChannelSelection = false;
          $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                             agree:false, email:"" };
          $scope.feedback.mychannel="";
          $scope.feedbackForm.$setPristine();
        }
    };
});