var pingpongServices = angular.module('pingpongServices', ['ngResource']);

pingpongServices.factory('Data', ['$resource',
    
    function($resource){
    	return $resource('data/dummy_data.json')
    }
]);
