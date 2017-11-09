'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TemplateManagementCtrl
 * @description
 * # TemplateManagementCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TemplateManagementCtrl', ['$scope', '$http', function ($scope, $http) {
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
