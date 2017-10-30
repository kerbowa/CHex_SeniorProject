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

    $scope.tbgen = function() {
      var req = $http.get('/api/tbgen');
      req.then(function (res) {
      });
      req.catch(function (err) {
        console.log(err);
      });
    };

    $scope.tbdel = function() {
      var req = $http.get('/api/tbdel');
      req.then(function (res) {
      });
      req.catch(function (err) {
        console.log(err);
      });
    };

    $scope.logout = function() {
		  authentication.logout(function() {
        $location.path('/');
      });
    };
  }]);
