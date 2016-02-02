"use strict";
/**
 * Created by Ashkov on 29.09.2015.
 */
describe('Constants: lodash', function(){
  var lodash;

  beforeEach(module('angularTDD'));
  beforeEach(inject(function(_){
    lodash = _;
  }));

  it('lodash should be defined', function(){
    expect(lodash).toBeDefined();
  });
});
