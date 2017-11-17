'use strict';

describe('Controller: EmailCtrl', function () {

  // load the controller's module
  beforeEach(module('Resume'));

  var EmailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmailCtrl = $controller('EmailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EmailCtrl.awesomeThings.length).toBe(3);
  });
});
