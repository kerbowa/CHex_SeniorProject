'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TemplatesCtrl
 * @description
 * # TemplatesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TemplatesCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {
    var req = $http.get('/api/gettb');
    var scope = this;
    req.then(function (res) {
      scope.teamNames = res.data.teams;
    });
    req.catch(function (err) {
      console.log(err);
    });

    $scope.DLTaskboard = function(teamName) {
      //var req = $http.post('/api/download', "Generated Files/" + teamName + "-sprint-task-board.docx")
      var request = $http.post('/api/download', { path: "Generated Files/" + teamName + "-sprint-task-board.docx", filename: teamName + "-sprint-task-board.docx" });

			request.success(function (data) {
      });

      request.error(function (data) {
      });
		};
  }]);
