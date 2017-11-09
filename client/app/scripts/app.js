'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ui.router',
    'ui.router.state.events',
    'ngSanitize',
    'ngStorage',
    'ngTouch',
    'vAccordion',
    'ngMaterial'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('public', {
         templateUrl: 'views/public.html',
         controller: 'PublicCtrl',
         controllerAs: 'public'
      })
      .state('public.main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('public.course-materials', {
        url: '/course-materials',
        templateUrl: 'views/course-materials.html',
        controller: 'CourseMaterialsCtrl',
        controllerAs: 'courseMaterials'
      })
      .state('public.forms', {
        url: '/forms',
        templateUrl: 'views/forms.html',
        controller: 'FormsCtrl',
        controllerAs: 'forms'
      })
      .state('public.templates', {
        url: '/templates',
        templateUrl: 'views/templates.html',
        controller: 'TemplatesCtrl',
        controllerAs: 'templates'
      })
      .state('dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .state('dashboard.team-management', {
        url: '/dashboard/team-management',
        templateUrl: 'views/team-management.html',
        controller: 'TeamManagementCtrl',
        controllerAs: 'teamManagement'
      })
      .state('dashboard.students', {
        url: '/dashboard/students',
        templateUrl: 'views/students.html',
        controller: 'StudentsCtrl',
        controllerAs: 'students'
      })
      .state('dashboard.clients', {
        url: '/dashboard/clients',
        templateUrl: 'views/clients.html',
        controller: 'ClientsCtrl',
        controllerAs: 'clients'
      })
      .state('dashboard.email', {
        url: '/dashboard/email',
        templateUrl: 'views/email.html',
        controller: 'EmailCtrl',
        controllerAs: 'email'
      })
      .state('dashboard.content-management', {
        url: '/dashboard/content-management',
        templateUrl: 'views/content-management.html',
        controller: 'ContentManagementCtrl',
        controllerAs: 'contentManagement'
      })
      .state('dashboard.template-management', {
        url: '/dashboard/template-management',
        templateUrl: 'views/template-management.html',
        controller: 'TemplateManagementCtrl',
        controllerAs: 'templateManagement'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      });
    $urlRouterProvider.otherwise('/');
  })
  .run(['$transitions', '$state', 'authentication', function ($transitions, $state, authentication) {
    $transitions.onBefore( { to: 'dashboard.**' }, function(trans) {
      if (!authentication.isLoggedIn()) {
        return trans.router.stateService.target('login');
      }
    })
  }]);
