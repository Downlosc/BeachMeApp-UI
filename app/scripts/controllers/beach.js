'use strict';

/**
 * @ngdoc function
 * @name baechmeupUiApp.controller:BeachCtrl
 * @description
 * # BeachCtrl
 * Controller of the baechmeupUiApp
 */
angular.module('baechmeupUiApp')
  .controller('BeachCtrl', function($scope, $location, SunshadeService) {
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
    $scope.columnNumber = 10;
    $scope.columnBeach = 5;
    $scope.sunshades = [];
    $scope.times = function(num) {
      return new Array(num);
    };
    $scope.calculateNumber = function(ppindex, pindex, index) {
      return parseInt((ppindex + 1) + '' + (pindex) + (index)) + 1;
    };
    $scope.parseNum = function(row, col, num, colP) {
      return num.toString().charAt(0) == row + 1 && (
        num.toString().charAt(1) == col && num.toString().charAt(2) != 0 ||
        num.toString().charAt(2) == 0 &&
        (parseInt(num.toString().charAt(1)) + parseInt(num.toString().charAt(2)) - 1 == col)
      ) && (parseInt(num.toString().charAt(2)) <= $scope.columnNumber);
    };
    $scope.goTo = function(path, id) {
      $location.path(path + '/' + id);
    };
    $scope.goToUrl = function(path) {
      $location.path(path)
    };
    $scope.showModal = function() {
      $('#beachModal').modal('show');
    };
    $scope.hideModal = function() {
      $('#beachModal').modal('hide');
    };
    $scope.getSunshade = function() {
      SunshadeService.getAllSunshades().then(function(sunshades) {
        $scope.sunshades = sunshades.data;
        $scope.sunshadeNumber = parseInt($scope.sunshades[$scope.sunshades.length - 1].SunshadeNumber);

        $scope.rowNumber = parseInt($scope.sunshades[$scope.sunshades.length - 1].SunshadeNumber.toString().charAt(0));
      }, function(err) {
        console.error(err);
      })
    };
    $scope.saveSunshade = function(newSunshade) {
      newSunshade.Available ? "1" : "0";
      newSunshade.Paid ? "1" : "0";
      SunshadeService.createSunshade(newSunshade).then(function(sunshades) {
        console.log('success');
        $scope.getSunshade();
        $('#beachModal').modal('hide');
      }, function(err) {
        console.log(err);
      })
    };

    $scope.getSunshade();
  });
