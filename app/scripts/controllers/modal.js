'use strict';

/**
 * @ngdoc function
 * @name JFS_AgentPortal.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the JFS_AgentPortal
 */
angular.module('Resume')
  .controller('ModalCtrl', function ($scope,$uibModalInstance,$rootScope,$http,items) {
    $scope.items=items;
    console.log(items);
    $scope.CloseModal = function () {
      $uibModalInstance.dismiss('cancel');
    };
    $scope.SendEmail = function(emailData){
      console.log("sending")
      $rootScope.loading=true;
      $http({
        method: 'Post',
        url: 'https://jfsapp.com/Open/API/ForwardMyEmail/',
        data:emailData.meta
      }).then(function (data) {
        $rootScope.loading = false;
  
      }, function (error) {
  
      });
    }
  });
