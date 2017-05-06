'use strict';

/**
 * @ngdoc function
 * @name baechmeupUiApp.controller:CustomersIdCtrl
 * @description
 * # CustomersIdCtrl
 * Controller of the baechmeupUiApp
 */
angular.module('baechmeupUiApp')
  .controller('CustomersIdCtrl', function ($scope, $routeParams, $location, CustomerService) {
    $scope.customer = {};
    $scope.goToUrl = function(path){
      $location.path(path);
    };
    $scope.goTo = function(path){
      $location.path('/' + path);
    };
    $scope.showModal = function() {
      $('#detailModal').modal('show');
    };
    $scope.hideModal = function() {
      $('#detailModal').modal('hide');
    };
    $scope.getCustomer = function(){
      CustomerService.getOneCustomer($routeParams.id).then(function(customer){
        $scope.customer = customer.data[0];

      }, function(err){
        console.error(err);
      })
    };
    $scope.getCustomer();
  });
