'use strict';

describe('Controller: PlayerTypeCtrl', function () {

  // load the controller's module
  beforeEach(module('playerCreatorApp'));

  var PlayerTypeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlayerTypeCtrl = $controller('PlayerTypeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
