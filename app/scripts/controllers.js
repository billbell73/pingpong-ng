var pingpongControllers = angular.module('pingpongControllers', []);


pingpongControllers.controller('ScorerCtrl', ['$scope', 'Data', 
	function($scope, Data) {

		Data.query(function(data){
	 		$scope.score = data[0];
	 	})

	 	$scope.increment = function(number){
	 		alert('Increment for player ' + number);
	 	}

	}
]);

