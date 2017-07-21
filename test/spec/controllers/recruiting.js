'use strict';

describe('Controller: RecruitingCtrl', function () {

  // load the controller's module
  beforeEach(module('JFS_AgentPortal'));

  var RecruitingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecruitingCtrl = $controller('RecruitingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RecruitingCtrl.awesomeThings.length).toBe(3);
  });
});
