angular.module('clickApp')

.service('redService', [function () {

		redCounter = 100

		this.incrementRed = function(count){
				return count++;
		};	

		this.decrementRed = function(count){
				return count--;
		};
		
		this.resetRed = function(count){
				if (count === 0) {
					return count = 100;
				}
		};
	
}]);