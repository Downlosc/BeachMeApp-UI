'use strict';

/**
 * @ngdoc service
 * @name baechmeupUiApp.WristbandService
 * @description
 * # WristbandService
 * Service in the baechmeupUiApp.
 */


angular.module('baechmeupUiApp') //define a service for Wristband
  .service('WristbandService', function($q, $http) {
    var appConfig = config;
    //define function to get all the wristband
    this.getAllWristbands = function() {
      //$q is for async method request
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

    //define function to get one single wristband
    this.getOneWristband = function(id){
      return $q(function(resolve, reject) {
        $http({
          method: 'GET',
          url: appConfig.API_URL + '/wristband/' + id
        }).then(function successCallback(response) {
          resolve(response);
        }, function errorCallback(resolve){
          reject(response);
        });
      });
    };

    //define function to create a new wristband
    this.createWristband = function(){
      return $q(function(resolve, reject) {
        $http({
          method: 'POST',
          url: appConfig.API_URL + '/wristband'
        }).then(function successCallback(response) {
          resolve(response);
        }, function errorCallback(resolve){
          reject(response);
        });
      });
    };

    //define function to delete a specific wristband
    this.deleteWristband = function(id){
      return $q(function(resolve, reject ) {
        $http({
          method: 'DELETE',
          url: appConfig.API_URL + '/wristband'+ id
        }).then(function successCallback(response) {
          resolve(response);
        }, function errorCallback(resolve){
          reject(response);
        });
      });
    };
    //define function to update a specific wristband
    this.updateWristband = function(id){
      return $q(function(resolve, reject ) {
        $http({
          method: 'PUT',
          url: appConfig.API_URL + '/wristband'+ id
        }).then(function successCallback(response) {
          resolve(response);
        }, function errorCallback(resolve){
          reject(response);
        });
      });
    };
  });
