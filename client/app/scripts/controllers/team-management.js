'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TeamManagementCtrl
 * @description
 * # TeamManagementCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TeamManagementCtrl', ['$scope', '$http', '$timeout', '$window', function ($scope, $http, $window, $timeout) {
    $scope.student = null;
    $scope.students = null;
    $scope.studentNames = null;
    $scope.teamNames = null;

    var req = $http.get('/api/getstudents');
    var scope = this;
    req.then(function (res) {
      $scope.studentNames = res.data.student;
      console.log(res);
    });
    req.catch(function(err) {
      console.log(err);
    });

    var req = $http.get('/api/getteams');
    var scope = this;
    req.then(function (res) {
      $scope.teamNames = res.data.team;
      console.log(res);
    });
    req.catch(function(err) {
      console.log(err);
    });

    $scope.loadStudents = function() {
      $scope.studentNames;
    };


    $scope.members = [{
      member: 'Jammy Loeur',
      email: 'jammyloeur@csus.edu',
    },
    {
      member: 'DJ Hayes',
      email: 'djhayes@csus.edu',
    },
    {
      member: 'Austin Kerbow',
      email: 'austinkerbow@csus.edu',
    }];
    $scope.teams = [{
      teamname: 'CHex',
      advisor: 'Yin Jin',
      advisoremail: 'yinjin@csus.edu',
      clientname: 'Robert Buckley',
      clientemail: 'buckley@csus.edu',
    },
    {
      teamname: 'Team 2',
      advisor: 'Ted Krovetz',
      advisoremail: 'krovetz@csus.edu',
      clientname: 'Hugh Mungus',
      clientemail: 'hughmungus@csus.edu',
    }];
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('green', {
        'default': '900'
      })
      .accentPalette('pink');
  })
