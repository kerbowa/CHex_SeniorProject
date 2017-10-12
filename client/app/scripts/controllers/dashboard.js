'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DashboardCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.tbgen = function() {
      var req = $http.get('/api/tbgen');
      req.then(function (res) {
      });
      req.catch(function (err) {
        console.log(err);
      });
    };
  }]);
