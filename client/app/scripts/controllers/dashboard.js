'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DashboardCtrl', ['$scope', '$http', '$location', '$transitions', 'authentication', function ($scope, $http, $location, $transitions, authentication) {

    /*
    $transitions.onBefore( { to: 'dashboard.**' }, function(trans) {
      return authentication.isLoggedIn();
    });
    */

    $scope.logout = function() {
		  authentication.logout(function() {
        $location.path('/');
      });
    };
  }]);
