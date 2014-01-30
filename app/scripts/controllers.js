var pingpongControllers = angular.module('pingpongControllers', []);

pingpongControllers.controller('ScorerCtrl', ['$scope', 'Data', '$http',
  function($scope, d, scope) {

  	scope.get('data/dummy_data.json').success(function(data) {
  			var testBool = data[0].flipped
		    $scope.message = { gameOdd: testBool };
		  });
    
  }
]);


