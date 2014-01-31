var pingpongServices = angular.module('pingpongServices', ['ngResource']);

pingpongServices.factory('Data', ['$resource',
    
//     function($resource){
//     	return $resource('data/dummy_data.json', {}, {
//       	getData: {method:'GET', isArray:true }
//     	})
//     }
// ]);


    function($resource){
    	return $resource('data/dummy_data.json')
    }
]);

// // function($http, $q) {
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
