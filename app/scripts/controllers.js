var pingpongControllers = angular.module('pingpongControllers', []);


pingpongControllers.controller('ScorerCtrl', ['$scope', 'Data', 
	function($scope, Data) {

		Data.query(function(data){
	 		$scope.score = data[0];
	 		$scope.p1points = data[0].p1points;
	 		$scope.p2points = data[0].p2points;
			$scope.p1games = data[0].p1games;
			$scope.p2games = data[0].p2games;
			$scope.server = data[0].server;
			console.log(data[0]);
			console.log(data[0].p1points);
	 	})

	}
]);

