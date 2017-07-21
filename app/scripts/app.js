'use strict';

/**
 * @ngdoc overview
 * @name jfsApp
 * @description
 * # jfsApp
 *
 * Main module of the application.
 */
angular
  .module('Resume', [
    'LocalStorageModule',
    'ngAnimate',
    'ngCookies',
    'ui.materialize',
    'ui.router'

  ]);

angular.module('Resume')
.run(function($rootScope, $state, localStorageService) {
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
    var requireLogin = toState.data.requireLogin;
  });

});
angular.module('Resume').config(function($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
  // configure Idle settings
  localStorageServiceProvider.setPrefix('App');
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state('app', {
    url: '',
    abstract:true,
    templateUrl: 'views/index.html',
    controller: 'MainCtrl',
    data: {
      requireLogin: false
    }
  })
    .state('app.Main', {
      url: '/',
      templateUrl: 'views/Pages/resume.html',
      data: {
        requireLogin: false
      }
    });

});
