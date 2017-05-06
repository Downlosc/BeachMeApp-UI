'use strict';

/**
 * @ngdoc function
 * @name baechmeupUiApp.controller:CustomersCtrl
 * @description
 * # CustomersCtrl
 * Controller of the baechmeupUiApp
 */
angular.module('baechmeupUiApp')
  .controller('CustomersCtrl', function($scope, $location, CustomerService) {
    $scope.allCustomers = [];

    $scope.goTo = function(path, id) {
      $location.path(path + '/' + id);
    };
    $scope.goToUrl = function(path) {
      $location.path(path)
    };
    $scope.showModal = function() {
      $('#addUserModal').modal('show');
    };
    $scope.hideModal = function() {
      $('#addUserModal').modal('hide');
    };
    $scope.getCustomers = function() {
      CustomerService.getAllCustomers().then(function(customers) {
        $scope.allCustomers = customers.data;
      }, function(err) {
        console.error(err);
      })
    };

    $scope.makeid = function() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }

    $scope.saveCustomer = function(newCustomer) {
      newCustomer.CustomerCode = $scope.makeid();
      CustomerService.createCustomer(newCustomer).then(function(customers) {
        console.log("success");
        $('#addUserModal').modal('hide');
        $scope.getCustomers();
      }, function(err) {
        console.error(err);
        // show errors
      })
    };

    $scope.getCustomers();
  });
