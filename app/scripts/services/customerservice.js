'use strict';

/**
 * @ngdoc service
 * @name baechmeupUiApp.CustomerService
 * @description
 * # CustomerService
 * Service in the baechmeupUiApp.
 */


angular.module('baechmeupUiApp') //define a service for Customers
  .service('CustomerService', function($q, $http) {
    var appConfig = config;
    //define function to get all the customer
    this.getAllCustomers = function() {
      //$q is for async method request
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

    //define function to get one single customer
    this.getOneSunshade = function(id){
      return $q(function(resolve, reject) {
        $http({
          method: 'GET',
          url: appConfig.API_URL + '/customer/' + id
        }).then(function successCallback(response) {
          resolve(response);
        }, function errorCallback(resolve){
          reject(response);
        });
      });
    };

    //define function to create a new customer
    this.createSunshade = function(){
      return $q(function(resolve, reject) {
        $http({
          method: 'POST',
          url: appConfig.API_URL + '/customer'
        }).then(function successCallback(response) {
          resolve(response);
        }, function errorCallback(resolve){
          reject(response);
        });
      });
    };

    //define function to delete a specific customer
    this.deleteSunshade = function(id){
      return $q(function(resolve, reject ) {
        $http({
          method: 'DELETE',
          url: appConfig.API_URL + '/customer'+ id
        }).then(function successCallback(response) {
          resolve(response);
        }, function errorCallback(resolve){
          reject(response);
        };
      });
    };
    //define function to update a specific customer
    this.updateSunshade = function(id){
      return $q(function(resolve, reject ) {
        $http({
          method: 'PUT',
          url: appConfig.API_URL + '/customer'+ id
        }).then(function successCallback(response) {
          resolve(response);
        }, function errorCallback(resolve){
          reject(response);
        };
      });
    };
  });
