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
      description: "Spiaggia",
      url: "beach",
      color: "orange",
      icon: "sun"
    }, {
      name: "bar",
      description: "Bar",
      url: "bar",
      color: "blue",
      icon: "coffee"
    }, {
      name: "customers",
      description: "Clienti",
      url: "customers",
      color: "green",
      icon: "users"
    }];

    $scope.goTo = function(path) {
      $location.path(path);
    }
  });
