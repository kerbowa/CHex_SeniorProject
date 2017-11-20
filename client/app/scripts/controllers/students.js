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

  $scope.addstudent = function(new_student) {
    //console.log('Add student ' + new_student.name + ' ' + new_student.email);
    var req = $http.post('/api/addstudent/', new_student);
    req.then(function (res) {
    });
    req.catch(function (err) {
      console.log(err);
    });
  }

  $scope.deletestudent = function(student_id) {
    //console.log('Delete student cntrl - id = ' + student_id);
    var data = { id: student_id };
    var req = $http.post('/api/deletestudent/', data);
    req.then(function (res) {
    });
    req.catch(function (err) {
      console.log(err);
    });
  };

  $scope.edit = function(field) {
    $scope.newField = {};
    $scope.newField = angular.copy(field);
  }

  $scope.editstudent = function(student) {
    console.log('Edit student =' + student.name);
    var data = {
      id: student._id,
      name: student.name,
      email: student.email,
    };
    var req = $http.post('/api/editstudent/', data);
    req.then(function (res) {
    });
    req.catch(function (err) {
      console.log(err);
    });
  }
}]);