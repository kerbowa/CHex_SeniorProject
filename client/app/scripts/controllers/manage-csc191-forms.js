'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ManageCsc191FormsCtrl
 * @description
 * # ManageCsc191FormsCtrl
 * Controller of the clientApp
 */
  angular.module('clientApp')
    .controller('ManageCsc191FormsCtrl', ['$scope', '$http', '$mdDialog',
      function ($scope, $http, $mdDialog) {

        $scope.initFirst = function() {

        $scope.status = '';
        $scope.customFullscreen = false;

        $scope.showAddContent = function(ev) {
          $mdDialog.show({
            controller: AddContentDialogController,
            templateUrl: 'dialog1.addContent.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            scope: $scope.$new(), // Uses prototypal inheritance to gain access to parent scope
            clickOutsideToClose:false,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
          })
          .then(function() {
          }, function() {
            $scope.status = 'You cancelled the dialog.';
          });
        };

       function AddContentDialogController($scope, $mdDialog) {
        $scope.title = null;
        $scope.contentDescription = null;
         $scope.hide = function() {
           $mdDialog.hide();
         };
         $scope.cancel = function() {
           $mdDialog.cancel();
         };
         $scope.createteam = function() {
           $mdDialog.hide();
         };
       }

       $scope.showAddCategory = function(ev) {
         $mdDialog.show({
           controller: AddCategoryDialogController,
           templateUrl: 'dialog2.addCategory.html',
           parent: angular.element(document.body),
           targetEvent: ev,
           scope: $scope.$new(), // Uses prototypal inheritance to gain access to parent scope
           clickOutsideToClose:false,
           fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
         })
         .then(function() {
         }, function() {
           $scope.status = 'You cancelled the dialog.';
         });
       };

      function AddCategoryDialogController($scope, $mdDialog) {
       $scope.title = null;
       $scope.contentDescription = null;
        $scope.hide = function() {
          $mdDialog.hide();
        };
        $scope.cancel = function() {
          $mdDialog.cancel();
        };
        $scope.createteam = function() {
          $mdDialog.hide();
        };
      }
      }
    }]);
