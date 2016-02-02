/**
 * Created by Ashkov on 29.09.2015.
 */
'use strict';

describe('Service: products', function() {
  var products,
    storage,
    ns = 'jabraTest';

  var p1 = {
      _id: 'ac3'
    },
    p2 = {
      _id: 'ac7'
    };

  beforeEach(module('angularTDD', function(storageProvider) {
    storageProvider.setNamespace(ns);
  }));

  beforeEach(inject(function(_products_, _storage_) {
    products = _products_;
    storage = _storage_;
  }));

  it('Should check that get products is defined', function() {
    expect(products.get).toBeDefined();
  });

  //If there was a http get service could've been mocked by httpBackend
  it('Should check the results from promise', function() {
    products.get().then(function(data) {
      expect(data).toBeDefined();
    });
  });

  it('Should add product to cart', function() {
    products.addToCart(p1);
    products.addToCart(p2);

    var cart = storage.get('cart');

    expect(cart.length).toBe(2);
    expect(cart[0]).toEqual(p1);
    expect(cart[1]).toEqual(p2);
  });

  it('should remove item from cart', function() {
    products.addToCart(p1);
    products.addToCart(p2);
    products.removeFromCart(p1);
    var cart = storage.get('cart');

    expect(cart.length).toBe(1);
    expect(cart[0]).toEqual(p2);
  });

  it('should get cart', function(){
    products.addToCart(p1);
    products.addToCart(p2);

    var cart = products.getCart();

    expect(cart).toEqual([p1, p2]);
  });

  it('should return tru if product is already in cart', function() {
    var p3 = {
        _id: 'p3'
      };

    products.addToCart(p1);
    products.addToCart(p2);

    expect(products.isInCart(p1)).toBe(true);
    expect(products.isInCart(p2)).toBe(true);
    expect(products.isInCart(p3)).toBe(false);
  });

});
