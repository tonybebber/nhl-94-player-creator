'use strict';

describe('Controller: PlayerSettingsCtrl', function () {

  // load the controller's module
  beforeEach(module('playerCreatorApp'));

  var PlayerSettingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlayerSettingsCtrl = $controller('PlayerSettingsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
