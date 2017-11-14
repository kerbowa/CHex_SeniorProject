'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:190ContentCtrl
 * @description
 * # 190ContentCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('190ContentCtrl', ['$scope', '$transitions', '$state', function($scope, $transitions, $state) {
    $scope.currentNavItem = $state.current.data.currentNavItem;
    $transitions.onSuccess({
      to: 'public.190.**'
    }, function(trans) {
      $scope.currentNavItem = trans.to().data.currentNavItem;
    });
  }]);
