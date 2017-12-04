'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('Clients190Ctrl', ['$scope', '$http', function ($scope, $http) {
        
 


        var req = $http.get('/api/getclients');
        var scope = this;
        req.then(function (res) {
        scope.clientNames = res.data.client;
          console.log(res);
        });
        req.catch(function (err) {
          console.log(err);
        });
  


   


}] ) ;
