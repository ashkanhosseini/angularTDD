'use strict';

/**
 * @ngdoc function
 * @name angularTDD.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTDD
 */
angular.module('angularTDD')
  .controller('MainCtrl', ['products', '_', function(products,   _) {
    var vm = this,
      allProducts;
    vm.products = [];

    products.get().then(function(data) {
      vm.products = allProducts = data;
    });

    vm.setMostExpensiveThree = function() {
      sortProducts('desc');
    };

    vm.setCheapestThree = function() {
      sortProducts('asc');
    };

    vm.resetFilters = function () {
      vm.products = allProducts;
    };

    vm.addToCart = products.addToCart;
    vm.removeFromCart = products.removeFromCart;
    vm.isInCart = products.isInCart;

    vm.addToCartTemplate = '<button ng-show="!main.isInCart(row)" ng-click="main.addToCart(row)" type="button"  class="btn btn-primary" >Add to cart</button>'+
                            '<button ng-show="main.isInCart(row)" ng-click="main.removeFromCart(row)" type="button"  class="btn btn-danger">Remove from cart</button>';

    /*Private methods*/
    function sortProducts(order) {
      var sorted = _.orderBy(allProducts, 'price', order);
      if (sorted) {
        vm.products = sorted.slice(0, 3);
      } else {
        vm.products = [];
      }
    }
  }]);
