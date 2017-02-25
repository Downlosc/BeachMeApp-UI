'use strict';

/**
 * @ngdoc service
 * @name baechmeupUiApp.WristbandService
 * @description
 * # WristbandService
 * Service in the baechmeupUiApp.
 */
 angular.module('baechmeupUiApp')
   .service('WristbandService', function($q, $http) {
     var appConfig = config;
     this.getAllWristbands = function() {
       return $q(function(resolve, reject) {
         $http({
           method: 'GET',
           url: appConfig.API_URL + '/wristband'
         }).then(function successCallback(response) {
           resolve(response);
         }, function errorCallback(response) {
           reject(response);
         });
       });
     };
   });
