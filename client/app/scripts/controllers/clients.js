'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ClientsCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $scope.customers = [
      { name: "DJ Hayes", city: "Sacramento"},
      { name: "Ellie Davidson", city: "Sacramento"},
      { name: "Kyle Ray", city: "West Sacramento"}
    ]

  var req = $http.get('/api/getclients');
  var scope = this;
  req.then(function (res) {
    scope.clientNames = res.data.client;
    console.log(res);
  });
  req.catch(function (err) {
    console.log(err);
  });
  }]);