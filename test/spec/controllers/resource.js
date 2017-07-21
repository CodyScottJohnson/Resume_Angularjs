'use strict';

describe('Controller: ResourceCtrl', function () {

  // load the controller's module
  beforeEach(module('JFS_AgentPortal'));

  var ResourceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResourceCtrl = $controller('ResourceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResourceCtrl.awesomeThings.length).toBe(3);
  });
});
