'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AdvisorCtrl', ['$scope', '$http', '$mdDialog', function ($scope, $http, $mdDialog) {
        
        $scope.advisor_id =null;
        $scope.advisorname =null;
        $scope.advisoremail =null;
        $scope.customFullscreen = false;
        $scope.selected = [];

    $scope.initFirst = function() {
        var req = $http.get('/api/getadvisors');
        var scope = this;
        req.then(function (res) {
        scope.advisorNames = res.data.advisor;
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
       $scope.createadvisor = function() {
         $scope.statusMsg = 'Sending data to server...';
         var Indata = {'advisorname': $scope.advisor.name, 'advisoremail': $scope.advisor.email};
         $http({
           url: '/api/createadvisors',
           method: 'POST',
           data: Indata,
           headers: {'Content-Type': 'application/json'}
         })
         $scope.initFirst();
         $mdDialog.hide();
       };
     }


     $scope.showEdit = function(ev, id, name, email) {

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
         },
         fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
       })
       .then(function() {
       }, function() {
         $scope.status = 'You cancelled the dialog.';
         $scope.initFirst();
       });
     };

      function EditController($scope, $mdDialog, selectedId, selectedName, selectedEmail) {
       $scope.aid = selectedId;
       $scope.aname = selectedName;
       $scope.aemail = selectedEmail;

       $scope.hide = function() {
         $mdDialog.hide();
       };
       $scope.cancel = function() {
         $mdDialog.cancel();
       };
       $scope.editadvisor = function() {
         $scope.statusMsg = 'Sending data to server...';
         var Indata = {'param1': $scope.aname, 'param2': $scope.aemail, 'param3':  $scope.aid};
          $http({
            url: '/api/editadvisors',
            method: 'POST',
            data: Indata,
            headers: {'Content-Type': 'application/json'}
          })
  
            $scope.initFirst();

            $mdDialog.hide();
        };
      }


          $scope.showDeleteConfirm = function(ev, advisor_id) {
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
          .ariaLabel('Delete Advisor')
          .targetEvent(ev)
          .ok('Yes')
          .cancel('No');

        $mdDialog.show(confirm).then(function() {
          var Indata = { id: advisor_id };
          $scope.status = 'You deleted the Advisor.';
          $http({
            url: '/api/deladvisor',
            method: 'POST',
            data: Indata,
            headers: {'Content-Type': 'application/json'}
          })
          $scope.initFirst();
        });
      };


        var req = $http.get('/api/getadvisors');
        var scope = this;
        req.then(function (res) {
          scope.advisorNames = res.data.advisor;
          console.log(res);
        });
        req.catch(function (err) {
          console.log(err);
        });


}] ) ;
