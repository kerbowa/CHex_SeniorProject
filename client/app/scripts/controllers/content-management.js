'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ContentManagementCtrl
 * @description
 * # ContentManagementCtrl
 * Controller of the clientApp
 * TODO allow navigation by URL!
 */
angular.module('clientApp')
  .controller('ContentManagementCtrl', ['$scope', '$http', '$mdDialog',
    function($scope, $http, $mdDialog) {
      $scope.currentNavItem = 'csc190';
    }
  ]).directive('apsUploadFile', apsUploadFile);

function apsUploadFile() {
  var directive = {
    restrict: 'E',
    template: '<input id="fileInput" type="file" class="ng-hide"> <md-button id="uploadButton" class="md-raised md-primary" aria-label="attach_file">    Choose file </md-button><md-input-container  md-no-float>    <input id="textInput" ng-model="fileName" type="text" placeholder="No file chosen" ng-readonly="true" md-is-error="submitCreateContent == true && (contentUrl == null || uploadedFile == null)" required></md-input-container>',
    link: apsUploadFileLink
  };
  return directive;
}

function apsUploadFileLink(scope, element, attrs) {
  var input = $(element[0].querySelector('#fileInput'));
  var button = $(element[0].querySelector('#uploadButton'));
  var textInput = $(element[0].querySelector('#textInput'));

  if (input.length && button.length && textInput.length) {
    button.click(function(e) {
      input.click();
    });
    textInput.click(function(e) {
      input.click();
    });
  }

  input.on('change', function(e) {
    var files = e.target.files;
    if (files[0]) {
      scope.fileName = files[0].name;
      scope.uploadedFile = files[0];
    } else {
      scope.fileName = null;
    }
    scope.$apply();
  });
};
