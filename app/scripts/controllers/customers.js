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
    $scope.allCustomers = [{
      id: 1,
      code: 'AS4567',
      firstname: "Oscar",
      lastname: "Benedetti",
      active: true,
      credit: 34.56
    }, {
      id: 2,
      code: 'AR4567',
      firstname: "Edoardo",
      lastname: "Spadoni",
      active: false,
      credit: 14.56
    }];

    $scope.goTo = function(path, id) {
      $location.path(path + '/' + id);
    };
    $scope.goToUrl = function(path) {
      $location.path(path)
    };
  });
