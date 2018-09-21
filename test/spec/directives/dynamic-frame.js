'use strict';

describe('Directive: dynamicFrame', function () {

  // load the directive's module
  beforeEach(module('Resume'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dynamic-frame></dynamic-frame>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dynamicFrame directive');
  }));
});
