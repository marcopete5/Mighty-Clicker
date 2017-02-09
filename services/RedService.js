angular.module('clickApp')

.service('redService', [function () {
		// var self = this;
		// self.redCounter = 100

		this.incrementRed = function(red){
				// self.redCounter++;
				// return self.redCounter
				red++;
				return red;
		};	

		this.decrementRed = function(red){
				// self.redCounter--;
				// return self.redCounter
				red--;
				return red;
		};
		
		this.resetRed = function(red){
				// return self.redCounter = 100;
				return red = 100;
		};
	
}]);