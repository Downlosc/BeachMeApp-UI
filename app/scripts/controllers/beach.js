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
    $scope.sunshades = [{
      id: 1,
      num:101,
      available: false,
      paid: true
    },{
      id: 2,
      num:102,
      available: false,
      paid: true
    },{
      id: 3,
      num:103,
      available: false,
      paid: true
    },{
      id: 4,
      num:114,
      available: false,
      paid: true
    },{
      id: 5,
      num:115,
      available: false,
      paid: true
    },{
      id: 6,
      num:126,
      available: false,
      paid: true
    },
    {
      id: 7,
      num:201,
      available: false,
      paid: true
    },{
      id: 8,
      num:202,
      available: false,
      paid: true
    },
    {
      id: 9,
      num:210,
      available: false,
      paid: true
    },{
      id: 10,
      num:220,
      available: true,
      paid: false
    },{
      id: 11,
      num:330,
      available: false,
      paid: false
    },
    {
      id: 11,
      num:441,
      available: true,
      paid: false
    }];
    $scope.sunshadeNumber = $scope.sunshades[$scope.sunshades.length-1].num;
    $scope.columnNumber = 10;
    $scope.columnBeach = 5;
    $scope.rowNumber = parseInt($scope.sunshades[$scope.sunshades.length-1].num.toString().charAt(0));
    $scope.times = function(num) {
      return new Array(num);
    };
    $scope.calculateNumber = function(ppindex, pindex, index) {
      return parseInt((ppindex + 1) + '' + (pindex) + (index)) + 1;
    };
    $scope.parseNum = function(row, col, num, colP) {
      return num.toString().charAt(0) == row+1 && (
        num.toString().charAt(1) == col && num.toString().charAt(2) != 0 ||
        num.toString().charAt(2) == 0 &&
        (parseInt(num.toString().charAt(1)) + parseInt(num.toString().charAt(2)) - 1 == col)
      ) && (parseInt(num.toString().charAt(2)) <= $scope.columnNumber);
    };
    $scope.goTo = function(path, id) {
      $location.path(path + '/' + id);
    };
    $scope.goToUrl = function(path){
      $location.path(path)
    };
  });
