var pingpongControllers = angular.module('pingpongControllers', []);


pingpongControllers.controller('ScorerCtrl', ['$scope', '$routeParams', 'Data', 
	function($scope, $routeParams, Data) {

		// console.log(Data.query());
		// console.log(Data.get());


		Data.get({id: 4}, function(data){
	 		$scope.score = data;
	 	})

	 	$scope.increment = function(number){
	 		$scope.score = Data.increment({id: 4, player_id: number});
	 	}

	 	$scope.decrement = function(number){
	 		$scope.score = Data.decrement({id: 4, player_id: number});
	 	}

	}
]);

