'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ClientsCtrl', ['$scope', '$http', '$mdDialog', function ($scope, $http, $mdDialog) {
        
        $scope.client_id =null;
        $scope.clientname =null;
        $scope.clientemail =null;
        $scope.clientstatus =null;

   $scope.customFullscreen = false;
$scope.initFirst = function() {
    var req = $http.get('/api/getclients');
  var scope = this;
  req.then(function (res) {
    scope.clientNames = res.data.client;
    console.log(res);
  });
  req.catch(function (err) {
    console.log(err);
  });

}


      $scope.showCreate = function(ev) {
        $mdDialog.show({
          controller: CreateController,
          templateUrl: 'dialog1.tmpl.html',
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

     function CreateController($scope, $mdDialog) {
       $scope.hide = function() {
         $mdDialog.hide();
       };
       $scope.cancel = function() {
         $mdDialog.cancel();
       };
       $scope.createclient = function() {
         $scope.statusMsg = 'Sending data to server...';
         var Indata = {'clientname': $scope.client.name, 'clientemail': $scope.client.email, 'clientstatus': $scope.client.status};
         $http({
           url: '/api/createclient',
           method: 'POST',
           data: Indata,
           headers: {'Content-Type': 'application/json'}
         })
         $scope.initFirst();
         $mdDialog.hide();
       };
     }


  $scope.editClient = function() {
    
    alert('This will allow you to edit client');
  };

  $scope.deleteClient = function() {
 
    alert('This will allow you to delete client');
  };


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
