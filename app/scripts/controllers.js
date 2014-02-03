var pingpongControllers = angular.module('pingpongControllers', []);


pingpongControllers.controller('ScorerCtrl', ['$scope', '$routeParams', 'Data', 
	function($scope, $routeParams, Data) {

		Data.get({id: $routeParams.id}, function(data){
	 		$scope.score = data;
	 	})

	 	$scope.increment = function(number){
	 		$scope.score = Data.increment({id: $routeParams.id, player_id: number});
	 	}

	 	$scope.decrement = function(number){
	 		$scope.score = Data.decrement({id: $routeParams.id, player_id: number});
	 	}

	}
]);

