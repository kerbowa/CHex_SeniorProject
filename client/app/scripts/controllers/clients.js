'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ClientsCtrl', ['$scope', '$http', '$mdDialog', '$route', function ($scope, $http, $mdDialog) {
        
        $scope.customFullscreen = false;
        $scope.selected = [];
        
        $scope.reloadPage = function() {
          window.location.reload();
        };

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
        $scope.reloadPage = function() {
          window.location.reload();
        };

       $scope.createclient = function() {
         $scope.statusMsg = 'Sending data to server...';
         var Indata = {'clientname': $scope.client.name, 'clientemail': $scope.client.email, 'clientstatus': $scope.client.status, 'clientorganization': $scope.client.organization, 'clientdescription': $scope.client.description, 'clienthref': $scope.client.href};
         $http({
           url: '/api/createclient',
           method: 'POST',
           data: Indata,
           headers: {'Content-Type': 'application/json'}
         })
         $mdDialog.hide();
         $scope.initFirst();
       };
     }


     $scope.showEdit = function(ev, id, name, email, status, organization, description, href) {

       $mdDialog.show({
         controller: EditController,
         templateUrl: 'dialog2.tmpl.html',
         parent: angular.element(document.body),
         targetEvent: ev,
         scope: $scope.$new(), // Uses prototypal inheritance to gain access to parent scope
         clickOutsideToClose:false,
         locals: {
           selectedId: id,
           selectedName: name,
           selectedEmail: email,
           selectedStatus: status,
           selectedOrganization: organization,
           selectedDescription: description,
           selectedHref: href
         },
         fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
       })
       .then(function() {
       }, function() {
         $scope.status = 'You cancelled the dialog.';
         $scope.initFirst();
       });
     };

      function EditController($scope, $mdDialog, selectedId, selectedName, selectedEmail, selectedStatus, selectedOrganization, selectedDescription, selectedHref) {
       $scope.cid = selectedId;
       $scope.cname = selectedName;
       $scope.cemail = selectedEmail;
       $scope.cstatus = selectedStatus;
       $scope.corganization = selectedOrganization;
       $scope.cdescription = selectedDescription;
       $scope.chref = selectedHref;

       $scope.hide = function() {
         $mdDialog.hide();
       };
       $scope.cancel = function() {
         $mdDialog.cancel();
       };

        $scope.reloadPage = function() {
          window.location.reload();
        };
    
       $scope.editclient = function() {
         $scope.statusMsg = 'Sending data to server...';
         var Indata = {'param1': $scope.cname, 'param2': $scope.cemail, 'param3': $scope.cstatus, 'param4': $scope.cid, 'param5': $scope.corganization, 'param6': $scope.cdescription, 'param7': $scope.chref};
          $http({
            url: '/api/editclient',
            method: 'POST',
            data: Indata,
            headers: {'Content-Type': 'application/json'}
          })
            $scope.initFirst();
            $mdDialog.hide();
        };
      }


          $scope.showDeleteConfirm = function(ev, client_id) {
           
           var confirm = $mdDialog.confirm({
           onComplete: function afterShowAnimation() {
            var $dialog = angular.element(document.querySelector('md-dialog'));
            var $actionsSection = $dialog.find('md-dialog-actions');
            var $cancelButton = $actionsSection.children()[0];
            var $confirmButton = $actionsSection.children()[1];
            angular.element($confirmButton).addClass('md-primary md-raised');
            angular.element($cancelButton).addClass('');
          }
        })
          .title('Are you sure you want to delete?')
          .textContent('')
          .ariaLabel('Delete Client')
          .targetEvent(ev)
          .ok('Yes')
          .cancel('No');

        $mdDialog.show(confirm).then(function() {
          var Indata = { id: client_id };
          $scope.status = 'You deleted the client.';
          $http({
            url: '/api/deleteclient',
            method: 'POST',
            data: Indata,
            headers: {'Content-Type': 'application/json'}
          })
          $scope.reloadPage();
          $scope.initFirst();
        });
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
