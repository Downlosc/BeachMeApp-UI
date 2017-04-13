(function(){

'use strict';

/**
 * @ngdoc overview
 * @name baechmeupUiApp
 * @description
 * # baechmeupUiApp
 *
 * Main module of the application.
 */
angular
  .module('baechmeupUiApp', [
    'ngResource',
    'ngRoute',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
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
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      .otherwise({
        redirectTo: '/'
      })

  })

})();
