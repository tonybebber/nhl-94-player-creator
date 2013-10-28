'use strict';

describe('Directive: numberAndPosition', function () {
  beforeEach(module('playerCreatorApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<number-and-position></number-and-position>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the numberAndPosition directive');
  }));
});
