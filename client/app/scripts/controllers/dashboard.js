'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DashboardCtrl', ['$scope', '$http', '$state', '$transitions', 'authentication', function ($scope, $http, $state, $transitions, authentication) {

    /*
    $transitions.onBefore( { to: 'dashboard.**' }, function(trans) {
      return authentication.isLoggedIn();
    });
    */

    $scope.logout = function() {
		  authentication.logout(function() {
        $state.go('public.main');
      });
    };
  }]);
