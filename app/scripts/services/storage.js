'use strict';
/**
 * @ngdoc function
 * @name angularTDD.provider:storage
 * @description stores infromatoin in session storage
 * # storageProvider
 * provider of the angularTDD
 */
angular.module('angularTDD').provider('storage', function() {
  var ns = 'storageNs';

  this.setNamespace = function(namespace) {
    ns = namespace;
  };

  this.$get = function(sessionStorage) {
    return {
      set: function(key, value) {
        value = angular.toJson(value);
        sessionStorage.setItem(getKey(key), value);
      },
      get: function(key) {
        var value = sessionStorage.getItem(getKey(key));
        return angular.fromJson(value);
      }
    };
  };

  /*private methods*/
  function getKey(key) {
    return ns + '.' + key;
  }
});
