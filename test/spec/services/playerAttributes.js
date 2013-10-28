'use strict';

describe('Service: playerAttributes', function () {

  // load the service's module
  beforeEach(module('playerCreatorApp'));

  // instantiate service
  var playerAttributes;
  beforeEach(inject(function (_playerAttributes_) {
    playerAttributes = _playerAttributes_;
  }));

  it('should do something', function () {
    expect(!!playerAttributes).toBe(true);
  });

});
