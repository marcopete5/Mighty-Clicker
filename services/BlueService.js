angular.module('clickApp')

.service('blueService', [function () {

		this.incrementBlue = function(count){
				return count++;
		};	

		this.decrementBlue = function(count){
				return count--;
		};
		
		this.resetBlue = function(count){
				if (count === 0) {
					return count = 100;
				}
		};
	
}]);