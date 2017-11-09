'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ClientsCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {
        
        $scope.client_id =null;
        $scope.clientname =null;
        $scope.clientemail =null;
        $scope.clientstatus =null;

        $scope.reverseOrder = true;
        $scope.sortField = 'client_id';

  var req = $http.get('/api/getclients');
  var scope = this;
  req.then(function (res) {
    scope.clientNames = res.data.client;
    console.log(res);
  });
  req.catch(function (err) {
    console.log(err);
  });


  $scope.sortBy = function(sortField) {
      $scope.reverseOrder = ($scope.sortField === sortField) ? !$scope.reverseOrder : false;
      $scope.sortField = sortField;
    };

    
    $scope.addClient = function() {

        var Indata = {'param1': $scope.client_id, 'param2': $scope.clientname, 'param3': $scope.clientemail, 'param4': $scope.clientstatus};

   
       $http({
          url: '/api/createclient',
          method: 'POST',
          data: Indata,
          headers: {'Content-Type': 'application/json'}
        })

        req.then(function (res) {
         console.log(res);
         alert('Client has been added');

        });

        req.catch(function (err) {
        console.log(err);
        });
  };




  $scope.editClient = function() {
    
    alert('This will allow you to edit client');
  };

  $scope.deleteClient = function() {
 
    alert('This will allow you to delete client');
  };


}] ) ;

