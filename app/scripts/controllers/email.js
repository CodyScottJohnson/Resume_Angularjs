'use strict';

/**
 * @ngdoc function
 * @name Resume.controller:EmailCtrl
 * @description
 * # EmailCtrl
 * Controller of the Resume
 */
angular.module('Resume')
  .controller('EmailCtrl', function ($rootScope, $sce, $http, $scope, $state, $stateParams, email, FileSaver, Blob) {
    $scope.page = email
    $http({
      method: 'GET',
      url: 'https://jfsapp.com/Open/API/Email/Metadata/' + $stateParams.GUID + '/',
    }).then(function (data) {
      $scope.emailMeta = data.data;

    }, function (error) {

    });
    $scope.downloadPreview = function () {
      $rootScope.loading = true;
      $http({
        method: 'GET',
        url: 'https://jfsapp.com/Open/API/File/Files/CoverLetters/' + $scope.emailMeta.PdfLocation + '.pdf',
        responseType: "arraybuffer"
      }).then(function (data) {
        console.log(data)
        var file = new Blob([data.data], { type: 'application/pdf;charset=utf-8' });
        FileSaver.saveAs(file, $scope.emailMeta.Subject + '.pdf');
        $rootScope.loading = false;
      }, function (error) {

        $state.go('app.error');
        return error
      });
    }
    $scope.urlEncode = function (text) {
      return encodeURI(text);
    }
  });
