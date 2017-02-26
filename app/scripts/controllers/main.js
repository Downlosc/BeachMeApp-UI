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

    //DA AGGIUNGERE LA DEFINIZIONE DI ID

/* SUNSHADE */

    // create one sunshade from service (SunshadeService)
    SunshadeService.createSunshade().then(function(succ) {
      console.log(succ);
      $scope.sunshades = succ.data;
    }, function(err) {
      console.error(err);
    });

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
    SunshadeService.updateSunshade(id).then(function(succ) {
      console.log(succ);
      $scope.sunshades = succ.data;
    }, function(err) {
      console.log(err);
    });

/* CUSTOMER */

    // create a customer from service (CustomerService)
    CustomerService.createCustomer().then(function(succ) {
      console.log(succ);
      $scope.customers = succ.data;
    }, function(err) {
      console.error(err);
    });

    // get customers from service (CustomerService)
    CustomerService.getAllCustomers().then(function(succ) {
      console.log(succ);
      $scope.customers = succ.data;
    }, function(err) {
      console.error(err);
    });

    // get one customer from service (CustomerService)
    CustomerService.getOneCustomers(id).then(function(succ) {
      console.log(succ);
      $scope.customers = succ.data;
    }, function(err) {
      console.error(err);
    });

    // delete one customer from service (CustomerService)
    CustomerService.deleteSunshade(id).then(function(succ) {
      console.log(succ);
      $scope.customers = succ.data;
    }, function(err) {
      console.error(err);
    });

    // update one customer from service (CustomerService)
    CustomerService.updateCustomer(id).then(function(succ) {
      console.log(succ);
      $scope.customers = succ.data;
    }, function(err) {
      console.error(err);
    });

/* WRISTBAND */

    // create wristband from service (WristbandService)
    WristbandService.createWristband().then(function(succ) {
      console.log(succ);
      $scope.wristbands = succ.data;
    }, function(err) {
      console.error(err);
    });

    // get all wristbands from service (WristbandService)
    WristbandService.getAllWristbands().then(function(succ) {
      console.log(succ);
      $scope.wristbands = succ.data;
    }, function(err) {
      console.error(err);
    });

    // get one wristband from service (WristbandService)
    WristbandService.getOneWristband(id).then(function(succ) {
      console.log(succ);
      $scope.wristbands = succ.data;
    }, function(err) {
      console.error(err);
    });

    // delete one wristband from service (WristbandService)
    WristbandService.deleteWristband(id).then(function(succ) {
      console.log(succ);
      $scope.wristbands = succ.data;
    }, function(err) {
      console.error(err);
    });

    // update one wristband from service (WristbandService)
    WristbandService.updateWristband(id).then(function(succ) {
      console.log(succ);
      $scope.wristbands = succ.data;
    }, function(err) {
      console.error(err);
    });

/* BEACHLOUNGER */

    // create beachlounger from service (BeachloungerService)
    BeachloungerService.createBeachlounger().then(function(succ) {
      console.log(succ);
      $scope.beachloungers = succ.data;
    }, function(err) {
      console.error(err);
    });

    // get all beachloungers from service (BeachloungerService)
    BeachloungerService.getAllBeachloungers().then(function(succ) {
      console.log(succ);
      $scope.beachloungers = succ.data;
    }, function(err) {
      console.error(err);
    });

    // get one beachlounger from service (BeachloungerService)
    BeachloungerService.getOneBeachlounger(id).then(function(succ) {
      console.log(succ);
      $scope.beachloungers = succ.data;
    }, function(err) {
      console.error(err);
    });

    // delete one beachlounger from service (BeachloungerService)
    BeachloungerService.deleteBeachlounger(id).then(function(succ) {
      console.log(succ);
      $scope.beachloungers = succ.data;
    }, function(err) {
      console.error(err);
    });

    // update one beachlounger from service (BeachloungerService)
    BeachloungerService.updateBeachlounger(id).then(function(succ) {
      console.log(succ);
      $scope.beachloungers = succ.data;
    }, function(err) {
      console.error(err);
    });

  });
