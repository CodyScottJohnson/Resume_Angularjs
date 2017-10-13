'use strict';

/**
 * @ngdoc function
 * @name JFS_AgentPortal.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the JFS_AgentPortal
 */
angular.module('Resume')
  .controller('ModalCtrl', function ($scope,$uibModalInstance,items) {
    $scope.items=items;
    console.log(items);
  });
