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
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })

      .when('/beach', {
        templateUrl: 'views/beach.html',
        controller: 'BeachCtrl',
        controllerAs: 'beach'
      })
      .when('/bar', {
        templateUrl: 'views/bar.html',
        controller: 'BarCtrl',
        controllerAs: 'bar'
      })
      .when('/customers', {
        templateUrl: 'views/customers.html',
        controller: 'CustomersCtrl',
        controllerAs: 'customers'
      })
      .when('/customers/:id', {
        templateUrl: 'views/customers/details.html',
        controller: 'CustomersIdCtrl',
        controllerAs: 'customers_details'
      })
      .when('/sunshades/:id', {
        templateUrl: 'views/sunshades/details.html',
        controller: 'SunshadesIdCtrl',
        controllerAs: 'sunshades_details'
      })
      .otherwise({
        redirectTo: '/'
      })

  })

})();
