var pingpongServices = angular.module('pingpongServices', []);

// pingpongServices.factory('Data', ['$http', '$q',
//     function($http, $q) {
//     	var delay = $q.defer();
// 			$http.get('data/dummy_data.json'), function(recipe) {
//       delay.resolve(recipe);
//       console.log(recipe);
//     }, function() {
//       delay.reject('Unable to fetch recipe ');
//     };
// 		console.log(delay.promise);
//     return delay.promise;
// 		}
		

// ]);


pingpongServices.factory('Data', ['$http', '$timeout',
    function($http, $timeout) {
  		var testData = [];
  		$http.get('data/dummy_data.json').success(function(data) {
      	testData.push(data[0].flipped);
      	console.log(testData);
    	});

    	console.log(testData)

    	$timeout(function () {
        console.log(testData);
      }, 4000);
    	
    	// return false;
		}
		

]);


