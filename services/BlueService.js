angular.module('clickApp')

.service('blueService', [function () {

		var self = this;
		self.blueCounter = 100

		this.incrementBlue = function(){
				self.blueCounter++;
				return self.blueCounter;
		};	

		this.decrementBlue = function(){
				self.blueCounter--;
				return self.blueCounter
		};
		
		this.resetBlue = function(){
					return self.blueCounter = 100;
				
		};
	
}]);