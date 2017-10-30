'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', ['$scope', '$http', '$state', 'authentication', function ($scope, $http, $state, authentication) {

  $scope.submit = function() {
		authentication.login($scope.user, function() {
      $state.go('dashboard.team-management');
    });
	};
}]);
