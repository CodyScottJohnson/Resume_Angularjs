'use strict';

describe('Controller: NewsletterCtrl', function () {

  // load the controller's module
  beforeEach(module('JFS_AgentPortal'));

  var NewsletterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewsletterCtrl = $controller('NewsletterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewsletterCtrl.awesomeThings.length).toBe(3);
  });
});
