'use strict';

/**
 * @ngdoc function
 * @name baechmeupUiApp.controller:BarCtrl
 * @description
 * # BarCtrl
 * Controller of the baechmeupUiApp
 */
angular.module('baechmeupUiApp')
  .controller('BarCtrl', function ($scope, $location) {
    $scope.goToUrl = function(path) {
      $location.path(path)
    }
  });
