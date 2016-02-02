"use strict";
/**
 * Created by Ashkov on 29.09.2015.
 */
describe('Constants: sessionStorage', function(){
  var sessionStorage;

  beforeEach(module('jabraApp'));
  beforeEach(inject(function(_sessionStorage_){
    sessionStorage = _sessionStorage_;
  }));

  it('lodash should be defined', function(){
    expect(sessionStorage).toBeDefined();
  });
});
