angular.module('clickApp')

.service('redService', [function () {

		var redCounter = 100

		this.incrementRed = function(){
				return redCounter++;
		};	

		this.decrementRed = function(){
				return redCounter--;
		};
		
		this.resetRed = function(){
				return redCounter = 100;
				
		};
	
}]);