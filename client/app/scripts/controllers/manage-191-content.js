'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:Manage191ContentCtrl
 * @description
 * # Manage191ContentCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('Manage191ContentCtrl', ['$scope', '$transitions', '$state', function ($scope, $transitions, $state) {
    $scope.currentNavItem = $state.current.data.currentNavItem;
    $transitions.onSuccess({
      to: 'dashboard.content-management.manage-191-content.**'
    }, function(trans) {
      $scope.currentNavItem = trans.to().data.currentNavItem;
    });
  }]);
