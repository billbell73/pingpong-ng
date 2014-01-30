var pingpongServices = angular.module('pingpongServices', []);

pingpongServices.factory('Data', ['$http', '$timeout',
    function($http, $timeout) {
    	var testData = [];
		  $http.get('data/dummy_data.json').success(function(data) {
		    testData.push(data[0].flipped);
		  });

		  return $timeout(function () {
        console.log(testData);
      }, 40);
		}
]);

// function($http, $q) {
//     	var testData = [];
//     	var defer = $q.defer();
//     	defer.promise
// 		    	.then(function () {
// 		    		$http.get('data/dummy_data.json').success(function(data) {
// 		      		testData.push(data[0].flipped);
// 		    		});
// 		    	});
		    	
//     	defer.resolve();
//     	console.log(testData);		
// 		}
// ]);
