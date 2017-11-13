'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ContentManagementCtrl
 * @description
 * # ContentManagementCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ContentManagementCtrl', ['$scope', '$http', '$mdDialog',
    function ($scope, $http, $mdDialog) {
      $scope.currentNavItem = 'csc190CM';
  }]);
