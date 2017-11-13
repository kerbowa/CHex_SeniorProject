'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:Csc190FormsCtrl
 * @description
 * # Csc190FormsCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
   .controller('Csc190FormsCtrl', ['$scope', '$http',

     function($scope, $http) {

     $scope.allContent = null;
       var data = {
         course: "190",
         page: "Forms"
       };
       var req = $http.post('/api/getcontent', data);
       req.then(function(data) {
         $scope.allContent = data.data.categories;
       }).catch(function() {
         console.log("Could not get page content");
       });
     }
   ]);
