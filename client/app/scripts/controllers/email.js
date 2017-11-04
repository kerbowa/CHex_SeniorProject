'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:EmailCtrl
 * @description
 * # EmailCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('EmailCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.student = null;
	//$scope.students = null;
	$scope.studentList = null;
	$scope.team = null;
	//$scope.teams = null;
	$scope.teamList = null;
	$scope.client = null;
	//$scope.clients = null;
	$scope.clientList = null;
	$scope.advisor = null;
	//$scope.advisors = null;
	$scope.advisorList = null;
    
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
	
	/*
	it('should check both checkBoxes', function() {
		expect(element(by.id('teamMember')).getAttribute('checked')).toBeFalsy();
		element(by.id('team')).click();
		expect(element(by.id('teamMember')).getAttribute('checked')).toBeTruthy();
	});
	*/
	
	$scope.email = function() {
		var req = $http.post('/api/email', $scope.EmailCtrl);
		req.then(function (res) {
			console.log(res);
		});
		req.catch(function (err) {
			console.log(err);
		});
	};
	
	
	
  }]);
