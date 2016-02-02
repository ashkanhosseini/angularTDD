'use strict';
/**
 * Created by Ashkov on 29.09.2015.
 */
angular.module('angularTDD').service('products', ['$q', 'storage', '_', function($q, storage, _) {
  var cart = [];
  this.get = function() {
    return $q.when(data);
  };

  this.addToCart = function(product) {
    cart.push(product);
    set();
  };

  this.removeFromCart = function(product) {
    _.remove(cart, function(p) {
      return product._id === p._id;
    });
    set();
  };

  this.isInCart = function(product) {
    return !!_.find(cart, product);
  };

  this.getCart = function() {
    return cart;
  };

  /*private methods*/
  function set() {
    storage.set('cart', cart);
  }

  /*******************************************************fake data****************************************************************/
  var data = [{
    "_id": "ac3",
    "name": "AC3 Phone",
    "brand": "ACME",
    "type": "phone",
    "price": 200,
    "warranty_years": 1,
    "available": true
  }, {
    "_id": "ac7",
    "name": "AC7 Phone",
    "brand": "ACME",
    "type": "phone",
    "price": 320,
    "warranty_years": 1,
    "available": false
  }, {
    "_id": {
      "$oid": "507d95d5719dbef170f15bf9"
    },
    "name": "AC3 Series Charger",
    "type": ["accessory", "charger"],
    "price": 19,
    "warranty_years": 0.25,
    "for": ["ac3", "ac7", "ac9"]
  }, {
    "_id": {
      "$oid": "507d95d5719dbef170f15bfa"
    },
    "name": "AC3 Case Green",
    "type": ["accessory", "case"],
    "color": "green",
    "price": 12,
    "warranty_years": 0
  }, {
    "_id": {
      "$oid": "507d95d5719dbef170f15bfb"
    },
    "name": "Phone Extended Warranty",
    "type": "warranty",
    "price": 38,
    "warranty_years": 2,
    "for": ["ac3", "ac7", "ac9", "qp7", "qp8", "qp9"]
  }, {
    "_id": {
      "$oid": "507d95d5719dbef170f15bfc"
    },
    "name": "AC3 Case Black",
    "type": ["accessory", "case"],
    "color": "black",
    "price": 12.5,
    "warranty_years": 0.25,
    "available": false,
    "for": "ac3"
  }, {
    "_id": {
      "$oid": "507d95d5719dbef170f15bfd"
    },
    "name": "AC3 Case Red",
    "type": ["accessory", "case"],
    "color": "red",
    "price": 12.1,
    "warranty_years": 0.25,
    "available": true,
    "for": "ac3"
  }, {
    "_id": {
      "$oid": "507d95d5719dbef170f15bfe"
    },
    "name": "Phone Service Basic Plan",
    "type": "service",
    "price": 40,
    "limits": {
      "voice": {
        "units": "minutes",
        "n": 400,
        "over_rate": 0.05
      },
      "data": {
        "units": "gigabytes",
        "n": 20,
        "over_rate": 1
      },
      "sms": {
        "units": "texts sent",
        "n": 100,
        "over_rate": 0.001
      }
    },
    "term_years": 2
  }, {
    "_id": {
      "$oid": "507d95d5719dbef170f15bff"
    },
    "name": "Phone Service Core Plan",
    "type": "service",
    "price": 60,
    "limits": {
      "voice": {
        "units": "minutes",
        "n": 1000,
        "over_rate": 0.05
      },
      "data": {
        "n": "unlimited",
        "over_rate": 0
      },
      "sms": {
        "n": "unlimited",
        "over_rate": 0
      }
    },
    "term_years": 1
  }, {
    "_id": {
      "$oid": "507d95d5719dbef170f15c00"
    },
    "name": "Phone Service Family Plan",
    "type": "service",
    "price": 90,
    "limits": {
      "voice": {
        "units": "minutes",
        "n": 1200,
        "over_rate": 0.05
      },
      "data": {
        "n": "unlimited",
        "over_rate": 0
      },
      "sms": {
        "n": "unlimited",
        "over_rate": 0
      }
    },
    "sales_tax": true,
    "term_years": 2
  }, {
    "_id": {
      "$oid": "507d95d5719dbef170f15c01"
    },
    "name": "Cable TV Basic Service Package",
    "type": "tv",
    "price": 50,
    "term_years": 2,
    "cancel_penalty": 25,
    "sales_tax": true,
    "additional_tarriffs": [{
      "kind": "federal tarriff",
      "amount": {
        "percent_of_service": 0.06
      }
    }, {
      "kind": "misc tarriff",
      "amount": 2.25
    }]
  }];


}]);
