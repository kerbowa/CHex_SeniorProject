'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:Manage190ContentCtrl
 * @description
 * # Manage190ContentCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('Manage190ContentCtrl', ['$scope', '$transitions', '$state', function ($scope, $transitions, $state) {
    $scope.currentNavItem = $state.current.data.currentNavItem;
    $transitions.onSuccess({
      to: 'dashboard.content-management.manage-190-content.**'
    }, function(trans) {
      $scope.currentNavItem = trans.to().data.currentNavItem;
    });
  }]);
