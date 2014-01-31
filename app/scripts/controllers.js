var pingpongControllers = angular.module('pingpongControllers', []);


pingpongControllers.controller('ScorerCtrl', ['$scope', 'Data', 
	function($scope, Data) {

		Data.query(function(data){
	 		$scope.message = { gameOdd: data[0].flipped };
	 	})

	}
]);

