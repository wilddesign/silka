'use strict';

angular.module('sappApp', ['sappApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });
