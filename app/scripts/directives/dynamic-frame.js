'use strict';

/**
 * @ngdoc directive
 * @name Resume.directive:dynamicFrame
 * @description
 * # dynamicFrame
 */
angular.module('Resume')
  .directive('dynamicFrame', function ($window) {
  return {
        restrict: 'A',
        scope: {
          value: '='
        },
        link:function(scope,elem,attrs,vm){
          var iframDom=elem[0];
          window.onload=window.onresize=function(){
            scope.setHeight(iframDom);
          };
        },
        controller:function($scope) {
          $scope.setHeight=setHeight;
          function setHeight(inIframeEl) {
            var iframeWin = inIframeEl.contentWindow || inIframeEl.contentDocument.parentWindow;
            if (iframeWin.document.body) {
              inIframeEl.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
            }
          }
        }
      };
  });
