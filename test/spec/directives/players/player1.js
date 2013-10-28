'use strict';

describe('Directive: players/player1', function () {
  beforeEach(module('playerCreatorApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<players/player1></players/player1>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the players/player1 directive');
  }));
});
