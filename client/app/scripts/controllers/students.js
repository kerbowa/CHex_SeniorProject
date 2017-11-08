'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:StudentsCtrl
 * @description
 * # StudentsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('StudentsCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {

  var req = $http.get('/api/getstudents');
  var scope = this;
  req.then(function (res) {
    scope.studentNames = res.data.student;
    console.log(res);
  });
  req.catch(function (err) {
    console.log(err);
  });

  $scope.deletestudent = function(student_id) {
    console.log('Delete student cntrl - id = ' + student_id);
    var data = { id: student_id };
    var req = $http.post('/api/deletestudent/', data);
    req.then(function (res) {
    });
    req.catch(function (err) {
      console.log(err);
    });
  };
}]);