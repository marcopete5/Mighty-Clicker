var app = angular.module('clickApp', []);

app.controller('mainController', ['$scope', '$http', 'redService', 'blueService', function ($scope, $http, redService, blueService){



$scope.changeBlue = function(blue, red){
	var newRed = redService.decrementRed(red);
	var newBlue = blueService.incrementBlue(blue);
	if (newRed === 0){
			newRed = redService.resetRed(red);
	}
	$scope.redCounter = newRed;
	$scope.blueCounter = newBlue;
}

$scope.changeRed = function(red, blue){
	var newRed = redService.incrementRed(red);
	var newBlue = blueService.decrementBlue(blue);
	if (newBlue === 0){
			newBlue = blueService.resetBlue(blue);
	}
	$scope.redCounter = newRed;
	$scope.blueCounter = newBlue;
}


}]);