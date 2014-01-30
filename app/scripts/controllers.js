var pingpongControllers = angular.module('pingpongControllers', []);

pingpongControllers.controller('ScorerCtrl', ['$scope', 'Data',
  function($scope, Data) {
    $scope.message = { gameOdd: Data };
  }
]);

