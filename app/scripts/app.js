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
    'duScroll',
    'LocalStorageModule',
    'ngAnimate',
    'ngCookies',
    'sticky',
    'ui.bootstrap',
    'ui.router'


  ]);

angular.module('Resume')
.run(function($rootScope, $state,$document, localStorageService,$location,$stateParams,$anchorScroll,$timeout) {

  $rootScope.modals = [{url:"views/Modals/job.html"}];
  $rootScope.$on('duScrollspy:becameActive', function($event, $element, $target){
      //Automaticly update location
      var hash = $element.prop('hash');
      console.log($state);
      if (hash) {
        history.replaceState(null, null, $state.current.url+hash);
      }
    });
    $rootScope.$on('duScrollspy:becameInactive', function($event, $element, $target){
        //Automaticly update location

          history.replaceState(null, null, $state.current.url);

      });
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
    var requireLogin = toState.data.requireLogin;
  });

});
angular.module('Resume').config(function($stateProvider, $urlRouterProvider, localStorageServiceProvider,$locationProvider) {
  // configure Idle settings
  localStorageServiceProvider.setPrefix('App');
  $locationProvider.html5Mode(true);
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
      templateUrl: 'views/Pages/Resume.html',
      data: {
        requireLogin: false
      }
    })
    .state('app.Resume', {
      url: '/Splash',
      templateUrl: 'views/Pages/Splash.html',
      data: {
        requireLogin: false
      }
    }).state('app.ComingSoon', {
      url: '/ComingSoon',
      templateUrl: 'views/Pages/ComingSoon.html',
      data: {
        requireLogin: false
      }
    });

});
