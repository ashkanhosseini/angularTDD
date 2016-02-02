'use strict';

describe('Service: storage', function() {
  var storage,
    ns = 'jabraTest';

  beforeEach(module('angularTDD', function(storageProvider) {
    storageProvider.setNamespace(ns);
  }));

  beforeEach(inject(function(_storage_) {
    storage = _storage_;
  }));

  it('should save data into session storage', function() {
    var exp = {
      test1: 'test1',
      test2: 'test2'
    };
    storage.set('expect', exp);
    expect(JSON.parse(sessionStorage.getItem(ns + '.expect'))).toEqual(exp);
  });

  it('should get data from session storage', function() {
    var exp = {
      test1: 'test1',
      test2: 'test2'
    };
    storage.set('expect', exp);
    expect(JSON.parse(sessionStorage.getItem(ns + '.expect'))).toEqual(storage.get('expect', exp));
  });
});
