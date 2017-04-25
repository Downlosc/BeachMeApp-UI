'use strict';

/**
 * @ngdoc function
 * @name baechmeupUiApp.controller:CustomersCtrl
 * @description
 * # CustomersCtrl
 * Controller of the baechmeupUiApp
 */
angular.module('baechmeupUiApp')
  .controller('CustomersCtrl', function($scope, $location) {

    $scope.goToUrl = function(path) {
      $location.path(path)
    };
  });
