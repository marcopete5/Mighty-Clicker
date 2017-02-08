angular.module('clickApp')

.service('blueService', [function () {

		var blueCounter = 100

		this.incrementBlue = function(){
				return blueCounter++;
		};	

		this.decrementBlue = function(){
				return blueCounter--;
		};
		
		this.resetBlue = function(){
					return blueCounter = 100;
				
		};
	
}]);