'use strict';

/**
 * @ngdoc service
 * @name baechmeupUiApp.CustomerService
 * @description
 * # CustomerService
 * Service in the baechmeupUiApp.
 */
 angular.module('baechmeupUiApp')
   .service('CustomerService', function($q, $http) {
     var appConfig = config;
     this.getAllCustomers = function() {
       return $q(function(resolve, reject) {
         $http({
           method: 'GET',
           url: appConfig.API_URL + '/customer'
         }).then(function successCallback(response) {
           resolve(response);
         }, function errorCallback(response) {
           reject(response);
         });
       });
     };
   });
