'use strict';

/**
 * @ngdoc function
 * @name Resume.controller:EmailCtrl
 * @description
 * # EmailCtrl
 * Controller of the Resume
 */
angular.module('Resume')
  .controller('EmailCtrl', function ($sce,$http,$scope,$state,$stateParams) {
    $http({
          method: 'GET',
          url: 'https://jfsapp.com/Open/API/Email/Preview/'+$stateParams.GUID+'/',
      }).then(function(data) {
        $scope.page = $sce.trustAsHtml(data.data);
        console.log($scope.page);
      }, function(error) {
          $state.go('app.error');
      });
  });
