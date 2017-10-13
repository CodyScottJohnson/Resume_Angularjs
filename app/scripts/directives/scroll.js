'use strict';

/**
 * @ngdoc directive
 * @name Resume.directive:scroll
 * @description
 * # scroll
 */
angular.module('Resume')
.directive('scroll', function($window, $document) {
    return function(scope, element, attrs) {
      var y = attrs.scrolly;
      angular.element($window).bind("scroll", function() {
        scope.pageYOffset = this.pageYOffset;
        if (this.pageYOffset >= y /*&& this.innerWidth > 600*/ ) {
          scope.boolChangeClass = true;
        //  if (scope.AutoScroll === true) {
          //  scope.AutoScroll = false;
          //  var someElement = angular.element(document.getElementById('MainContent'));
            //$document.scrollToElement(someElement, 0, 150);

          //  console.log('Scrolled below header.');
        //  }
          //console.log('Scrolled below header.');
        } else {
          scope.boolChangeClass = false;
          scope.AutoScroll = true;
          //console.log(element);
        }
        scope.pageYOffset = this.pageYOffset;
        //console.log(this.pageYOffset);
        scope.$apply();
      });
    };
  });
