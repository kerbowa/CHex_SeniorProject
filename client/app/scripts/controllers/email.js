'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:EmailCtrl
 * @description
 * # EmailCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('EmailCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.init = function() {
      $scope.student = null;
      $scope.studentList = null;
      $scope.team = null;
      $scope.teamList = null;
      $scope.client = null;
      $scope.clientList = null;
      $scope.advisor = null;
      $scope.advisorList = null;
      $scope.sent = false;

      var req = $http.get('/api/getstudents');
      var scope = this;
      req.then(function(res) {
        $scope.studentList = res.data.student;
        console.log(res);
      });
      req.catch(function(err) {
        console.log(err);
      });

      var req = $http.get('/api/getteams');
      var scope = this;
      req.then(function(res) {
        $scope.teamList = res.data.team;
        console.log(res);
      });
      req.catch(function(err) {
        console.log(err);
      });

      var req = $http.get('/api/getclients');
      var scope = this;
      req.then(function(res) {
        $scope.clientList = res.data.client;
        console.log(res);
      });
      req.catch(function(err) {
        console.log(err);
      });

      var req = $http.get('/api/getadvisors');
      var scope = this;
      req.then(function(res) {
        $scope.advisorList = res.data.advisor;
        console.log(res);
      });
      req.catch(function(err) {
        console.log(err);
      });
    };

    $scope.emailList = [];

    $scope.sendMail = function() {

      var emailInfo = ({
        Recipient: $scope.emailList,
        Subject: $scope.emailFormData.subject,
        Textbody: $scope.emailFormData.textbody
      });

      $scope.emailStatus = "Email in progress."

      var req = $http.post('/api/email', emailInfo);
      req.then(function successCallback(res) {
        if (res.Status) {
          console.log(res.message);
          $scope.emailStatus = res.message;
        } else {
          console.log(res.message);
          $scope.emailStatus = res.message;
        }
        $scope.init();
      });
      /*
      req.catch(function errorCallback(err) {
      	console.log(res.message);
      	$scope.emailStatus = res.message;
      });
      */
    };

  }]).directive('selectAll', function($timeout, $parse) {
    return {
      restrict: 'A',
      link: function(scope, masterElement, attrs) {
        var slaveName = attrs.selectAll;
        var slaveSelector = ':checkbox[rel="' + slaveName + '"]';

        masterElement.on('click', function() {
          angular.element(slaveSelector).each(function(i, elem) {
            var localScope = angular.element(elem).scope();
            var model = $parse(angular.element(elem).attr('ng-model'));
            model.assign(localScope, masterElement.prop('checked'));
            localScope.$apply();
          });
        });
        $timeout(function() {
          var slaveElements = angular.element(slaveSelector);
          var setMasterState = function() {
            var checkedSlaves = slaveElements.filter(function(i, elem) {
              return angular.element(elem).prop('checked');
            });
            var isChecked = (checkedSlaves.length === slaveElements.length);
            var isIndeterminate = (checkedSlaves.length > 0 && checkedSlaves.length < slaveElements.length);
            masterElement.prop('checked', isChecked);
            masterElement.prop('indeterminate', isIndeterminate);
          };
          setMasterState();
          slaveElements.on('click', setMasterState);
        });
      }
    }
  });
