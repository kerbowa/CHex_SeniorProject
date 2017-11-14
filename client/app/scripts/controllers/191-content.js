'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:191ContentCtrl
 * @description
 * # 191ContentCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('191ContentCtrl', ['$scope', '$transitions', '$state', function($scope, $transitions, $state) {
    $scope.currentNavItem = $state.current.data.currentNavItem;
    $transitions.onSuccess({
      to: 'public.191.**'
    }, function(trans) {
      $scope.currentNavItem = trans.to().data.currentNavItem;
    });
  }]);
