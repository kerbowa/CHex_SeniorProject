'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('StudentsCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.getstudents = function() {
      var req = $http.get('/api/getstudents');
      req.then(function (res) {
      });
      req.catch(function (err) {
        console.log(err);
      });
    };
  }]);