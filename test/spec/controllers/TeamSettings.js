'use strict';

describe('Controller: TeamSettingsCtrl', function () {

  // load the controller's module
  beforeEach(module('playerCreatorApp'));

  var TeamSettingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeamSettingsCtrl = $controller('TeamSettingsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
