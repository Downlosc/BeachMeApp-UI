'use strict';

/**
 * @ngdoc service
 * @name baechmeupUiApp.SunshadeService
 * @description
 * # SunshadeService
 * Service in the baechmeupUiApp.
 */
angular.module('baechmeupUiApp')
  .service('SunshadeService', function($q, $http) {
    var appConfig = config;
    this.getAllSunshades = function() {
      return $q(function(resolve, reject) {
        $http({
          method: 'GET',
          url: appConfig.API_URL + '/sunshade'
        }).then(function successCallback(response) {
          resolve(response);
        }, function errorCallback(response) {
          reject(response);
        });
      });
    };
  });
