'use strict';

/**
 * @ngdoc function
 * @name baechmeupUiApp.controller:BarCtrl
 * @description
 * # BarCtrl
 * Controller of the baechmeupUiApp
 */
angular.module('baechmeupUiApp')
  .controller('BarCtrl', function($scope, $location) {
    $scope.selectedCategory = 'cafe';
    $scope.total = 0;
    $scope.totalItems = [];
    $scope.allBar = {
      cafe: [{
        id: 1,
        name: 'caffè nero',
        description: 'faboulus coffee',
        price: 1
      }, {
        id: 1,
        name: 'cappuccino',
        description: 'faboulus cappuccino',
        price: 1.5
      }],
      antipasti: [{
        id: 12,
        name: 'pizza con mortazza',
        description: 'mortazza buonissima',
        price: 4
      }, {
        id: 13,
        name: 'caprese',
        description: 'pomodoro origano e cazzo di mozza',
        price: 5
      }],
      primi: [],
      secondi: [],
      drink: []
    }
    $scope.calculateTotal = function() {
      var total = 0;
      for (var i in $scope.totalItems) {
        total += $scope.totalItems[i].price;
      }
      $scope.total = total;
    };
    $scope.addToCart = function(item) {
      $scope.totalItems.push(item);
      $scope.calculateTotal();
    };
    $scope.removeFromCart = function(item) {
      $scope.totalItems.pop(item);
      $scope.calculateTotal();
    };
    $scope.setCategory = function(category) {
      $scope.selectedCategory = category;
    };
    $scope.goToUrl = function(path) {
      $location.path(path)
    };
    $scope.calculateTotal();
    $scope.showModal = function() {
      $('.ui.modal').modal('show');
    };
    $scope.hideModal = function() {
      $('.ui.modal').modal('hide');
    };

  });
