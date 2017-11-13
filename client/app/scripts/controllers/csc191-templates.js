'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:Csc191TemplatesCtrl
 * @description
 * # Csc191TemplatesCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
   .controller('Csc191TemplatesCtrl', ['$scope', '$http',

     function($scope, $http) {

     $scope.allContent = null;
       var data = {
         course: "191",
         page: "Templates"
       };
       var req = $http.post('/api/getcontent', data);
       req.then(function(data) {
         $scope.allContent = data.data.categories;
       }).catch(function() {
         console.log("Could not get page content");
       });
     }
   ]);
