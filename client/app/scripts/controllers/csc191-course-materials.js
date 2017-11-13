'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:Csc191CourseMaterialsCtrl
 * @description
 * # Csc191CourseMaterialsCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
   .controller('Csc191CourseMaterialsCtrl', ['$scope', '$http',

     function($scope, $http) {

     $scope.allContent = null;
       var data = {
         course: "191",
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
