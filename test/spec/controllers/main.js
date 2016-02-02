'use strict';

describe('Controller: MainCtrl', function() {
  var MainCtrl,
    rootScope,
    timeout;

  // load the controller's module
  beforeEach(module('jabraApp'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, $q, $timeout) {
    rootScope = $rootScope;
    timeout = $timeout;
    MainCtrl = $controller('MainCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach 3 cheapest products to scope', function(done) {
    timeout.flush();
    MainCtrl.setCheapestThree();
    expect(MainCtrl.products.length).toBe(3);
    expect(MainCtrl.products[0].price).toBeLessThan(MainCtrl.products[1].price);
    expect(MainCtrl.products[1].price).toBeLessThan(MainCtrl.products[2].price);

    done();
  });

  it('should attach 3 most expensive products to scope', function(done) {
    timeout.flush();
    MainCtrl.setMostExpensiveThree();
    expect(MainCtrl.products.length).toBe(3);
    expect(MainCtrl.products[0].price).not.toBeLessThan(MainCtrl.products[1].price);
    expect(MainCtrl.products[1].price).not.toBeLessThan(MainCtrl.products[2].price);

    done();
  });

  it('should reset filters', function() {
    timeout.flush();
    MainCtrl.setMostExpensiveThree();
    MainCtrl.resetFilters();
    expect(MainCtrl.products.length).toBe(11);
  });

  it('is in cart should be defined', function() {
    expect(MainCtrl.isInCart).toBeDefined();
  });


  it('addToCart should be defined', function() {
    expect(MainCtrl.addToCart).toBeDefined();
  });


  it('removeFromCart should be defined', function() {
    expect(MainCtrl.removeFromCart).toBeDefined();
  });
});
