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
    'angular-inview',
    'duScroll',
    'ngAnimate',
    'ngCookies',
    'sticky',
    'ui.bootstrap',
    'ui.router'


  ]);

angular.module('Resume')
.run(function($rootScope, $state,$document,$location,$stateParams,$anchorScroll,$timeout) {

  $rootScope.modals = [{url:"views/Modals/job.html"}];
  /*$rootScope.$on('duScrollspy:becameActive', function($event, $element, $target){
      //Automaticly update location
      var hash = $element.prop('hash');
      console.log($state);
      if (hash) {
        //$state.go('app.Main',{"hash":"cody"});
        $location.hash(hash.replace('#',''));
        //history.replaceState(null, null, $state.current.url+hash);
      }
    });*/
    /*
    $rootScope.$on('duScrollspy:becameInactive', function($event, $element, $target){
        //Automaticly update location
          //$location.hash();
          history.replaceState(null, null, $state.current.url);

      });
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
    console.log('State Change');
    //var requireLogin = toState.data.requireLogin;
  });*/

});
angular.module('Resume').config(function($stateProvider, $urlRouterProvider,$locationProvider) {
  // configure Idle settings
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/404");
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
      templateUrl: 'views/Pages/Splash.html',
      data: {
        requireLogin: false
      }
    })
    .state('app.Resume', {
      url: '/Resume',
      templateUrl: 'views/Pages/Resume_Download.html',
      data: {
        requireLogin: false
      }
    }).state('app.ResumePreview', {
      url: '/Resume/Preview',
      templateUrl: 'views/Pages/Resume_Preview.html',
      data: {
        requireLogin: false
      }
    }).state('app.ComingSoon', {
      url: '/ComingSoon',
      templateUrl: 'views/Pages/ComingSoon.html',
      data: {
        requireLogin: false
      }
    })
    .state('app.Blog', {
      url: '/Blog',
      templateUrl: 'views/Blog/index.html'
    })
    .state('app.Projects', {
      url: '/Projects',
      templateUrl: 'views/Projects/index.html'
    })
    .state('app.Email', {
      url: '/Email/:GUID',
      controller: 'EmailCtrl',
      resolve: {
        email: function($stateParams,$http,$sce,$state){
          return $http({
            method: 'GET',
            url: 'https://jfsapp.com/Open/API/Email/Preview/'+$stateParams.GUID+'/',
        }).then(function(data) {
          var page = $sce.trustAsHtml(data.data);
          return page;
        }, function(error) {

            $state.go('app.error');
            return error
        });
        }
      },
      templateUrl: 'views/Pages/Email.html'
    })
    .state('app.EmailPreview', {
      url: '/Email/Preview/:GUID',
      controller: 'EmailCtrl',
      resolve: {
        email: function($stateParams,$http,$sce,$state){
          return $http({
            method: 'GET',
            url: 'https://jfsapp.com/Open/API/Email/Preview/'+$stateParams.GUID+'/',
        }).then(function(data) {
          var page = $sce.trustAsHtml(data.data);
          return page;
        }, function(error) {
            $state.go('app.error');
            return error
        });
        }
      },
      templateUrl: 'views/Pages/Email_Extended.html'
    })
    .state('app.Project', {
      url: '/Project',
      templateUrl: 'views/Projects/project.html'
    })
    .state('app.error', {
      url: '/404',
      templateUrl: 'views/Pages/404.html'
    });

});
