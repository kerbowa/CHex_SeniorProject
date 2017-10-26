'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TeamManagementCtrl
 * @description
 * # TeamManagementCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TeamManagementCtrl', ['$scope', '$http', function ($scope, $http) {
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
