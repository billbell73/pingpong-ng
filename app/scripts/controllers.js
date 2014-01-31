var pingpongControllers = angular.module('pingpongControllers', []);


pingpongControllers.controller('ScorerCtrl', ['$scope', 'Data', 
	function($scope, Data) {
		// console.log(Data.query());
		// get({}, function(content){
		// 	$scope.message = { gameOdd: content };
		// })
	  // $scope.message = { gameOdd: data };
	 	var testData = Data.get(function(data){
	 		$scope.message = { gameOdd: data };
	 	})
	}
]);


// phonecatApp.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {
//   $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//     $scope.mainImageUrl = phone.images[0];
//   });