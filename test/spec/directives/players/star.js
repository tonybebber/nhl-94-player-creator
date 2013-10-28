'use strict';

describe('Directive: players/star', function () {
  beforeEach(module('playerCreatorApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<players/star></players/star>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the players/star directive');
  }));
});
