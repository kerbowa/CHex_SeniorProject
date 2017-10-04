'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.submit = function() {
      $http.post('/api/login', $scope.user).then(
      	function(response){
					console.log(data.msg);
      	}, 
      	function(response){
      		// failure callback
					console.log(data.msg);
      	}
    		);
    	};
  }]);
