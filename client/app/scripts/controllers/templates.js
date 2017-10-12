'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TemplatesCtrl
 * @description
 * # TemplatesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TemplatesCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.tbgen = function() {
      var req = $http.get('/api/tbgen');
      req.then(function (res) {
        $scope.awesomeUsers = res.data.users;
      });
      req.catch(function (err) {
        console.log(err);
      });
    };
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
