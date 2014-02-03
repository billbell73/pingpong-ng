var pingpongControllers = angular.module('pingpongControllers', []);


pingpongControllers.controller('ScorerCtrl', ['$scope', 'Data', 
	function($scope, Data) {

		// console.log(Data.query());
		console.log(Data.get());


		Data.get(function(data){
	 		$scope.score = data;
	 	})

	 	$scope.increment = function(number){
	 		$scope.score = Data.increment({player_id: 7});
	 	}

	}
]);

