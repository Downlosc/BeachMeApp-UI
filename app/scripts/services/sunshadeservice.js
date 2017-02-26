'use strict';

/**
 * @ngdoc service
 * @name baechmeupUiApp.SunshadeService
 * @description
 * # SunshadeService
 * Service in the baechmeupUiApp.
 */


angular.module('baechmeupUiApp') //define a service for Sunshade
  .service('SunshadeService', function($q, $http) {
    var appConfig = config;
    //define function to get all the sunshade
    this.getAllSunshades = function() {
      //$q is for async method request
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

    //define function to get one single sunshade
    this.getOneSunshade = function(id){
      return $q(function(resolve, reject) {
        $http({
          method: 'GET',
          url: appConfig.API_URL + '/sunshade/' + id
        }).then(function successCallback(response) {
          resolve(response);
        }, function errorCallback(resolve){
          reject(response);
        });
      });
    };

    //define function to create a new sunshade
    this.createSunshade = function(){
      return $q(function(resolve, reject) {
        $http({
          method: 'POST',
          url: appConfig.API_URL + '/sunshade'
        }).then(function successCallback(response) {
          resolve(response);
        }, function errorCallback(resolve){
          reject(response);
        });
      });
    };

    //define function to delete a specific sunshade
    this.deleteSunshade = function(id){
      return $q(function(resolve, reject ) {
        $http({
          method: 'DELETE',
          url: appConfig.API_URL + '/sunshade'+ id
        }).then(function successCallback(response) {
          resolve(response);
        }, function errorCallback(resolve){
          reject(response);
        });
      });
    };
    //define function to update a specific sunshde
    this.updateSunshade = function(id){
      return $q(function(resolve, reject ) {
        $http({
          method: 'PUT',
          url: appConfig.API_URL + '/sunshade'+ id
        }).then(function successCallback(response) {
          resolve(response);
        }, function errorCallback(resolve){
          reject(response);
        });
      });
    };
  });
