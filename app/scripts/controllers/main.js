'use strict';

/**
 * @ngdoc function
 * @name baechmeupUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the baechmeupUiApp
 */
angular.module('baechmeupUiApp')
  .controller('MainCtrl', function($scope, SunshadeService) {
    $scope.sunshades = [];

    // get sunshades from service (SunshadeService)
    SunshadeService.getAllSunshades().then(function(succ) {
      console.log(succ);
      $scope.sunshades = succ.data;
    }, function(err) {
      console.error(err);
    });

  });
