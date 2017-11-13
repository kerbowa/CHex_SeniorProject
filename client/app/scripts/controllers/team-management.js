'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TeamManagementCtrl
 * @description
 * # TeamManagementCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TeamManagementCtrl', ['$scope', '$http', '$mdDialog',
    function ($scope, $http, $mdDialog) {

    $scope.initFirst = function() {

      $scope.student = null;
      $scope.students = null;
      $scope.studentList = null;
      $scope.team = null;
      $scope.teams = null;
      $scope.teamList = null;
      $scope.client = null;
      $scope.clients = null;
      $scope.clientList = null;
      $scope.advisor = null;
      $scope.advisors = null;
      $scope.advisorList = null;

      $scope.courseList = [
        { name: "190"},
        { name: "191"}
      ]

      $scope.status = '';
      $scope.customFullscreen = false;

      $scope.showAdvanced = function(ev) {
        $mdDialog.show({
          controller: DialogController,
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

     function DialogController($scope, $mdDialog) {
       $scope.hide = function() {
         $mdDialog.hide();
       };
       $scope.cancel = function() {
         $mdDialog.cancel();
       };
       $scope.createteam = function() {
         $scope.statusMsg = 'Sending data to server...';
         var Indata = {'param1': $scope.team, 'param2': $scope.course, 'param3': $scope.advisor,
             'param4': $scope.client, 'param5': $scope.studentOne, 'param6': $scope.studentTwo,
             'param7': $scope.studentThree, 'param8': $scope.studentFour, 'param9': $scope.studentFive,
             'param10': $scope.studentSix};
         $http({
           url: '/api/createteam',
           method: 'POST',
           data: Indata,
           headers: {'Content-Type': 'application/json'}
         })
         $scope.initFirst();
         $mdDialog.hide();
       };
     }

      $scope.editTeam = function() {
        $scope.statusMsg = 'Sending data to server...';
        var Indata = {'param1': $scope.team, 'param2': $scope.course, 'param3': $scope.advisor,
            'param4': $scope.client, 'param5': $scope.studentOne, 'param6': $scope.studentTwo,
            'param7': $scope.studentThree, 'param8': $scope.studentFour, 'param9': $scope.studentFive,
            'param10': $scope.studentSix};
        $http({
          url: '/api/editteam',
          method: 'POST',
          data: Indata,
          headers: {'Content-Type': 'application/json'}
        })
        $scope.initFirst();
      };

      var req = $http.get('/api/getstudents');
      var scope = this;
      req.then(function (res) {
        $scope.studentList = res.data.student;
        console.log(res);
      });
      req.catch(function(err) {
        console.log(err);
      });

      var req = $http.get('/api/getteams');
      var scope = this;
      req.then(function (res) {
        $scope.teamList = res.data.team;
        console.log(res);
      });
      req.catch(function(err) {
        console.log(err);
      });

      var req = $http.get('/api/getclients');
      var scope = this;
      req.then(function (res) {
        $scope.clientList = res.data.client;
        console.log(res);
      });
      req.catch(function(err) {
        console.log(err);
      });

      var req = $http.get('/api/getadvisors');
      var scope = this;
      req.then(function (res) {
        $scope.advisorList = res.data.advisor;
        console.log(res);
      });
      req.catch(function(err) {
        console.log(err);
      });


      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
}])

  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('green', {
        'default': '900'
      })
      .accentPalette('grey');
    $mdThemingProvider.theme('docs-dark')
      .primaryPalette('yellow')
      .dark();
  })
