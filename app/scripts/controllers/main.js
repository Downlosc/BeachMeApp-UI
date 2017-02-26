'use strict';

/**
 * @ngdoc function
 * @name baechmeupUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the baechmeupUiApp
 */
angular.module('baechmeupUiApp')
  .controller('MainCtrl', function($scope, SunshadeService, CustomerService, BeachloungerService, WristbandService) {
    $scope.sunshades = [];
    $scope.customers = [];
    $scope.wristbands = [];
    $scope.beachloungers = [];

    // get sunshades from service (SunshadeService)
    SunshadeService.getAllSunshades().then(function(succ) {
      console.log(succ);
      $scope.sunshades = succ.data;
    }, function(err) {
      console.error(err);
    });

    //get one sunshade from service (SunshadeService)
    SunshadeService.getOneSunshade(id).then(function(succ) {
      console.log(succ);
      $scope.sunshades = succ.data;
    }, function(err) {
      console.log(err);
    });

    //delete one sunshade from service (SunshadeService)
    SunshadeService.deleteSunshade(id).then(function(succ) {
      console.log(succ);
      $scope.sunshades = succ.data;
    }, function(err) {
      console.log(err);
    });

    //update one sunshade from service (SunshadeService)
    SunshadeService.deleteSunshade(id).then(function(succ) {
      console.log(succ);
      $scope.sunshades = succ.data;
    }, function(err) {
      console.log(err);
    });

    // get customers from service (CustomerService)
    CustomerService.getAllCustomers().then(function(succ) {
      console.log(succ);
      $scope.customers = succ.data;
    }, function(err) {
      console.error(err);
    });



    // get wristband from service (WristbandService)
    WristbandService.getAllWristbands().then(function(succ) {
      console.log(succ);
      $scope.wristbands = succ.data;
    }, function(err) {
      console.error(err);
    });

    // get wristband from service (WristbandService)
    BeachloungerService.getAllBeachloungers().then(function(succ) {
      console.log(succ);
      $scope.beachloungers = succ.data;
    }, function(err) {
      console.error(err);
    });

  });
