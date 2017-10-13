'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', ['$scope', '$http', '$location', 'authentication', function ($scope, $http, $location, authentication) {

  $scope.submit = function() {
		authentication.login($scope.user, function() {
      $location.path('/dashboard');
    });
	};
}]);
