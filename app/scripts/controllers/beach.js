'use strict';

/**
 * @ngdoc function
 * @name baechmeupUiApp.controller:BeachCtrl
 * @description
 * # BeachCtrl
 * Controller of the baechmeupUiApp
 */
angular.module('baechmeupUiApp')
  .controller('BeachCtrl', function($scope, $location) {
    $scope.numberMap = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve"
    };
    $scope.rowNumber = 8;
    $scope.columnNumber = 10;
    $scope.columnBeach = 3;
    $scope.times = function(num) {
      return new Array(num);
    };
    $scope.calculateNumber = function(ppindex, pindex, index) {
      return parseInt((ppindex + 1) + '' + (pindex) + (index)) + 1;
    };
    $scope.goTo = function(path, ppindex, pindex, index) {
      var indexSun = $scope.calculateNumber(ppindex, pindex, index);
      $location.path(path + '/' + indexSun);
    };
    $scope.goToUrl = function(path){
      $location.path(path)
    };
  });
