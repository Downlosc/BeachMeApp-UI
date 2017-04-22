'use strict';

/**
 * @ngdoc function
 * @name baechmeupUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the baechmeupUiApp
 */
angular.module('baechmeupUiApp')
  .controller('MainCtrl', function($scope, $location) {
    $scope.availableViews = [{
      name: "beach",
      description: "Beach",
      url: "beach",
      color: "orange",
      icon: "sun"
    }, {
      name: "bar",
      description: "Cafè",
      url: "bar",
      color: "blue",
      icon: "coffee"
    }, {
      name: "customers",
      description: "Customers",
      url: "customers",
      color: "brown",
      icon: "users"
    }];

    $scope.goTo = function(path) {
      $location.path(path);
    }
  });
