'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:Csc190CourseMaterialsCtrl
 * @description
 * # Csc190CourseMaterialsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('Csc190CourseMaterialsCtrl', ['$scope', '$http',

    function($scope, $http) {

    $scope.allContent = null;
      var data = {
        course: "190",
        page: "Course Materials"
      };
      var req = $http.post('/api/getcontent', data);
      req.then(function(data) {
        $scope.allContent = data.data.categories;
      }).catch(function() {
        console.log("Could not get page content");
      });
    }
  ]);
