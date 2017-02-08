var app = angular.module('clickApp', []);

app.controller('mainController', ['$scope', '$http', 'redService', 'blueService', function ($scope, $http, redService, blueService){

$scope.redCounter = 100;

$scope.blueCounter = 100;



}]);