'use strict';

describe('Directive: pagination', function () {
  beforeEach(module('playerCreatorApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<pagination></pagination>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the pagination directive');
  }));
});
