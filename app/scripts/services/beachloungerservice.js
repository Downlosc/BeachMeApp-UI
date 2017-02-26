'use strict';

/**
 * @ngdoc service
 * @name baechmeupUiApp.BeachloungerService
 * @description
 * # BeachloungerService
 * Service in the baechmeupUiApp.
 */


angular.module('baechmeupUiApp') //define a service for Beachlounger
  .service('BeachloungerService', function($q, $http) {
    var appConfig = config;
    //define function to get all the beachlounger
    this.getAllBeachloungers = function() {
      //$q is for async method request
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

    //define function to get one single beachlounger
    this.getOneBeachlounger = function(id){
      return $q(function(resolve, reject) {
        $http({
          method: 'GET',
          url: appConfig.API_URL + '/beachlounger/' + id
        }).then(function successCallback(response) {
          resolve(response);
        }, function errorCallback(resolve){
          reject(response);
        });
      });
    };

    //define function to create a new beachlounger
    this.createBeachlounger = function(){
      return $q(function(resolve, reject) {
        $http({
          method: 'POST',
          url: appConfig.API_URL + '/beachlounger'
        }).then(function successCallback(response) {
          resolve(response);
        }, function errorCallback(resolve){
          reject(response);
        });
      });
    };

    //define function to delete a specific beachlounger
    this.deleteBeachlounger = function(id){
      return $q(function(resolve, reject ) {
        $http({
          method: 'DELETE',
          url: appConfig.API_URL + '/beachlounger'+ id
        }).then(function successCallback(response) {
          resolve(response);
        }, function errorCallback(resolve){
          reject(response);
        };
      });
    };
    //define function to update a specific beachlounger
    this.updateBeachlounger = function(id){
      return $q(function(resolve, reject ) {
        $http({
          method: 'PUT',
          url: appConfig.API_URL + '/beachlounger'+ id
        }).then(function successCallback(response) {
          resolve(response);
        }, function errorCallback(resolve){
          reject(response);
        };
      });
    };
  });
