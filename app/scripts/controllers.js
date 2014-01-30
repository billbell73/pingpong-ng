var pingpongControllers = angular.module('pingpongControllers', []);

pingpongControllers.controller('PingCtrl', ['$scope', 'Data',
  function($scope, Data) {
    $scope.message = { gameOdd: Data };
  }
]);

