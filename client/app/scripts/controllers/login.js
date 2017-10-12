'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', ['$scope', '$http', AuthenticationService, function ($scope, $http) {
  var vm = this;

  $scope.submit = function() {
    vm.loading = true;
    AuthenticationService.Login($scope.user.username, $scope.user.password, function (result) {
      if (result === true) {
        $location.path('/dashboard');
      } else {
        vm.error = 'Username or password is incorrect';
        vm.loading = false;
      }
    });
  };
}]);
