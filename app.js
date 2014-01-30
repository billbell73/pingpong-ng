var app = angular.module('pingApp', ['ngRoute'])

app.controller('PingCtrl', function($scope, Data){
	$scope.message = { gameOdd: Data };
})

app.factory('Data', function(){
	return false;
})