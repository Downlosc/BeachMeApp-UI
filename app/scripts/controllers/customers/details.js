'use strict';

/**
 * @ngdoc function
 * @name baechmeupUiApp.controller:CustomersIdCtrl
 * @description
 * # CustomersIdCtrl
 * Controller of the baechmeupUiApp
 */
angular.module('baechmeupUiApp')
  .controller('CustomersIdCtrl', function ($scope, $location) {
    $scope.goToUrl = function(path){
      $location.path(path);
    };
    $scope.goTo = function(path){
      $location.path('/' + path);
    };
    $scope.showModal = function() {
      $('.ui.modal').modal('show');
    };
    $scope.hideModal = function() {
      $('.ui.modal').modal('hide');
    };
  });
