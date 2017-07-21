'use strict';

describe('Service: Agents', function () {

  // load the service's module
  beforeEach(module('JFS_AgentPortal'));

  // instantiate service
  var Agents;
  beforeEach(inject(function (_Agents_) {
    Agents = _Agents_;
  }));

  it('should do something', function () {
    expect(!!Agents).toBe(true);
  });

});
