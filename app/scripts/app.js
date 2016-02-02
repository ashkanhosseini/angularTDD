'use strict';

/**
 * @ngdoc overview
 * @name jabraApp
 * @description
 * # jabraApp
 *
 * Main module of the application.
 */
var ngApp = angular
  .module('jabraApp', [
    'ngAnimate',
    'ngRoute'
  ]);

ngApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  ngApp.config(function (storageProvider) {
    storageProvider.setNamespace('jabraApp');
  });
