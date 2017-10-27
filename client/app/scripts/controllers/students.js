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
  	$scope.customers = [
  		{ name: "DJ Hayes", city: "Sacramento"},
  		{ name: "Ellie Davidson", city: "Sacramento"},
  		{ name: "Kyle Ray", city: "West Sacramento"}
  	]

	var req = $http.get('/api/getstudents');
	var scope = this;
	req.then(function (res) {
		scope.studentNames = res.data.student;
		console.log(res);
	});
	req.catch(function (err) {
		console.log(err);
	});
  }]);