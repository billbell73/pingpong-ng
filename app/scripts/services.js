var pingpongServices = angular.module('pingpongServices', ['ngResource']);

pingpongServices.factory('Data', ['$resource',
    
    function($resource){
    	return $resource('http://localhost:3000/api/matches/4', 
				{ player_id: '7' }, { 
					increment: { 
					method: 'PUT', 
					params: { player_id: '7' }, 
					isArray: false 
					}
				}
    	)
    }
]);
