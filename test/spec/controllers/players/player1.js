'use strict';

describe('Controller: PlayersPlayer1Ctrl', function () {

  // load the controller's module
  beforeEach(module('playerCreatorApp'));

  var PlayersPlayer1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlayersPlayer1Ctrl = $controller('PlayersPlayer1Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
