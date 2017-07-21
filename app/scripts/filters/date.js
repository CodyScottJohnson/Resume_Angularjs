'use strict';

/**
 * @ngdoc filter
 * @name JFS_AgentPortal.filter:date
 * @function
 * @description
 * # date
 * Filter in the JFS_AgentPortal.
 */
angular.module('Resume')
.filter('momentdate', [
  '$filter',
  function($filter) {
      return function(input, format) {
          if (input === null) { return '';}
          else { return moment(input).format(format);}
      };
  }
]);
