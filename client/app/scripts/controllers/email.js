'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:EmailCtrl
 * @description
 * # EmailCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('EmailCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.email = function() {
      var req = $http.get('/api/email');
      req.then(function (res) {
      });
      req.catch(function (err) {
        console.log(err);
      });
    };
    
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
  }]);
