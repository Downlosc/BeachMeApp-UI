'use strict';

/**
 * @ngdoc service
 * @name baechmeupUiApp.BeachloungerService
 * @description
 * # BeachloungerService
 * Service in the baechmeupUiApp.
 */
 angular.module('baechmeupUiApp')
   .service('BeachloungerService', function($q, $http) {
     var appConfig = config;
     this.getAllBeachloungers = function() {
       return $q(function(resolve, reject) {
         $http({
           method: 'GET',
           url: appConfig.API_URL + '/beachlounger'
         }).then(function successCallback(response) {
           resolve(response);
         }, function errorCallback(response) {
           reject(response);
         });
       });
     };
   });
