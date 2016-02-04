'use strict';

describe('directive: compile', function() {
  var elm,
    scope,
    $rootScope,
    value = 'test',
    template = '<div compile="value"> </div>';

    beforeEach(module('angularTDD'));

  beforeEach(inject(function(_$rootScope_, $compile) {
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
    scope.value = value;
    elm = $compile(template)(scope);
    $rootScope.$digest();
  }));

  it('should compile', function() {
    scope.value = "{{1+1}}";
    $rootScope.$digest();
    expect(elm.text()).toBe('2');
  })
});
