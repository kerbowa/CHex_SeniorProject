'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
var app = angular.module('clientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'vAccordion'
  ]);
  app.factory('AuthenticationService', Service);
  app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('course-materials', {
        url: '/course-materials',
        templateUrl: 'views/course-materials.html',
        controller: 'CourseMaterialsCtrl',
        controllerAs: 'courseMaterials'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .state('forms', {
        url: '/forms',
        templateUrl: 'views/forms.html',
        controller: 'FormsCtrl',
        controllerAs: 'forms'
      })
      .state('templates', {
        url: '/templates',
        templateUrl: 'views/templates.html',
        controller: 'TemplatesCtrl',
        controllerAs: 'templates'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      });
      $urlRouterProvider.otherwise('/main');
    });

    function Service($http, $localStorage) {
        var service = {};

				service.Login = Login;
        service.Logout = Logout;

        return service;

        function Login(username, password, callback) {
            $http.post('/api/login', { username: username, password: password })
                .success(function (response) {
                    // login successful if there's a token in the response
                    if (response.token) {
                        // store username and token in local storage to keep user logged in between page refreshes
                        $localStorage.currentUser = { username: username, token: response.token };

                        // add jwt token to auth header for all requests made by the $http service
                        $http.defaults.headers.common.Authorization = 'Bearer ' + response.token;

                        // execute callback with true to indicate successful login
                        callback(true);
                    } else {
                        // execute callback with false to indicate failed login
                        callback(false);
                    }
                });
        }

        function Logout() {
            // remove user from local storage and clear http auth header
            delete $localStorage.currentUser;
            $http.defaults.headers.common.Authorization = '';
        }
    }
