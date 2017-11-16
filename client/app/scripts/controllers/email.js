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
	$scope.init = function() {
		$scope.student = null;
		$scope.studentList = null;
		$scope.team = null;
		$scope.teamList = null;
		$scope.client = null;
		$scope.clientList = null;
		$scope.advisor = null;
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
	};
	
	$scope.emailList = [];
	
	$scope.checkUncheckAll = function() {
		if($scope.checkall) {
			$scope.checkall = true;
		}
		else {
			$scope.checkall = false;
		}
		angular.forEach($scope.studentList, function(student) {
			student.checked = $scope.checkall;
		});
	};
	
	$scope.toggleSelection = function toggleSelection(student) {
		var index = $scope.emailList.indexOf(student.email);
		
		//Is currently selected
		if (index > -1)
			$scope.emailList.splice(index, 1);
			
		//Is newly selected
		else
			$scope.emailList.push(student.email);
	};
	
	$scope.sendMail = function() {
		var emailInfo = ({
			Recipient: $scope.emailList,
			Subject: $scope.emailFormData.subject,
			Textbody: $scope.emailFormData.textbody
		});
		
		$scope.emailStatus = "Email in progress."
		
		var req = $http.post('/api/email', emailInfo);
		req.then(function successCallback(res) {
			if(res.Status) {
				console.log(res.message);
				$scope.emailStatus = res.message;
			}
			else {
				console.log(res.message);
				$scope.emailStatus = res.message;
			}
		});
		/*
		req.catch(function errorCallback(err) {
			console.log(res.message);
			$scope.emailStatus = res.message;
		});
		*/
	};
	
  }]);
