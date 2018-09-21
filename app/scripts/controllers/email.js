'use strict';

/**
 * @ngdoc function
 * @name Resume.controller:EmailCtrl
 * @description
 * # EmailCtrl
 * Controller of the Resume
 */
angular.module('Resume')
  .controller('EmailCtrl', function ($sce,$http,$scope,$state,$stateParams,email) {
    $scope.page = email

  });
