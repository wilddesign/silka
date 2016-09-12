'use strict';

angular.module('sappApp')
  .config(function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'app/main/maingrid.html'
    });
  });
