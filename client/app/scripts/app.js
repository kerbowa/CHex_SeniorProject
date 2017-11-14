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
    'ngMaterial',
    'md.data.table'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
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
      .state('public.190', {
        templateUrl: 'views/190-content.html',
        controller: '190ContentCtrl',
        controllerAs: '190Content'
      })
      .state('public.191', {
        templateUrl: 'views/191-content.html',
        controller: '191ContentCtrl',
        controllerAs: '191Content'
      })
      .state('public.190.csc190-course-materials', {
        url: '/190-course-materials',
        data: {
          'currentNavItem': 'csc190CM'
        },
        templateUrl: 'views/csc190-course-materials.html',
        controller: 'Csc190CourseMaterialsCtrl',
        controllerAs: 'csc190CourseMaterials'
      })
      .state('public.190.csc190-forms', {
        url: '/190-forms',
        data: {
          'currentNavItem': 'csc190FM'
        },
        templateUrl: 'views/csc190-forms.html',
        controller: 'Csc190FormsCtrl',
        controllerAs: 'csc190Forms'
      })
      .state('public.190.csc190-templates', {
        url: '/190-templates',
        data: {
          'currentNavItem': 'csc190TM'
        },
        templateUrl: 'views/csc190-templates.html',
        controller: 'Csc190TemplatesCtrl',
        controllerAs: 'csc190Templates'
      })
      .state('public.191.csc191-course-materials', {
        url: '/191-course-materials',
        data: {
          'currentNavItem': 'csc191CM'
        },
        templateUrl: 'views/csc191-course-materials.html',
        controller: 'Csc191CourseMaterialsCtrl',
        controllerAs: 'csc191CourseMaterials'
      })
      .state('public.191.csc191-forms', {
        url: '/191-forms',
        data: {
          'currentNavItem': 'csc191FM'
        },
        templateUrl: 'views/csc191-forms.html',
        controller: 'Csc191FormsCtrl',
        controllerAs: 'csc191Forms'
      })
      .state('public.191.csc191-templates', {
        url: '/191-templates',
        data: {
          'currentNavItem': 'csc191TM'
        },
        templateUrl: 'views/csc191-templates.html',
        controller: 'Csc191TemplatesCtrl',
        controllerAs: 'csc191Templates'
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
        templateUrl: 'views/content-management.html',
        controller: 'ContentManagementCtrl',
        controllerAs: 'contentManagement'
      })
      .state('dashboard.content-management.manage-csc190-course-materials', {
        url: '/dashboard/content-management/manage-csc190-course-materials',
        templateUrl: 'views/manage-csc190-course-materials.html',
        controller: 'ManageCsc190CourseMaterialsCtrl',
        controllerAs: 'manageCsc190CourseMaterials'
      })
      .state('dashboard.content-management.manage-csc191-course-materials', {
        url: '/dashboard/content-management/manage-csc191-course-materials',
        templateUrl: 'views/manage-csc191-course-materials.html',
        controller: 'ManageCsc191CourseMaterialsCtrl',
        controllerAs: 'manageCsc191CourseMaterials'
      })
      .state('dashboard.content-management.manage-csc190-templates', {
        url: '/dashboard/content-management/manage-csc190-templates',
        templateUrl: 'views/manage-csc190-templates.html',
        controller: 'ManageCsc190TemplatesCtrl',
        controllerAs: 'manageCsc190Templates'
      })
      .state('dashboard.content-management.manage-csc191-templates', {
        url: '/dashboard/content-management/manage-csc191-templates',
        templateUrl: 'views/manage-csc191-templates.html',
        controller: 'ManageCsc191TemplatesCtrl',
        controllerAs: 'manageCsc191Templates'
      })
      .state('dashboard.content-management.manage-csc190-forms', {
        url: '/dashboard/content-management/manage-csc190-forms',
        templateUrl: 'views/manage-csc190-forms.html',
        controller: 'ManageCsc190FormsCtrl',
        controllerAs: 'manageCsc190Forms'
      })
      .state('dashboard.content-management.manage-csc191-forms', {
        url: '/dashboard/content-management/manage-csc190-forms',
        templateUrl: 'views/manage-csc191-forms.html',
        controller: 'ManageCsc191FormsCtrl',
        controllerAs: 'manageCsc191Forms'
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
  .controller('IndexCtrl', ['$scope', '$state', function($scope, $state) {
    $scope.$state = $state;
  }])
  .run(['$transitions', '$state', 'authentication', function($transitions, $state, authentication) {
    $transitions.onBefore({
      to: 'dashboard.**'
    }, function(trans) {
      if (!authentication.isLoggedIn()) {
        return trans.router.stateService.target('login');
      }
    })
  }]);
