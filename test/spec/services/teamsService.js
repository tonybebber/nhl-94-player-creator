'use strict';

describe('Service: teamsService', function () {

  // load the service's module
  beforeEach(module('playerCreatorApp'));

  // instantiate service
  var teamsService;
  beforeEach(inject(function (_teamsService_) {
    teamsService = _teamsService_;
  }));

  it('should do something', function () {
    expect(!!teamsService).toBe(true);
  });

});
