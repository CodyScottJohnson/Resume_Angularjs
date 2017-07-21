'use strict';

describe('Service: Functions', function () {

  // load the service's module
  beforeEach(module('JFS_AgentPortal'));

  // instantiate service
  var Functions;
  beforeEach(inject(function (_Functions_) {
    Functions = _Functions_;
  }));

  it('should do something', function () {
    expect(!!Functions).toBe(true);
  });

});
