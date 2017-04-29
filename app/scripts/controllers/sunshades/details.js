'use strict';

/**
 * @ngdoc function
 * @name baechmeupUiApp.controller:SunshadesIdCtrl
 * @description
 * # SunshadesIdCtrl
 * Controller of the baechmeupUiApp
 */
angular.module('baechmeupUiApp')
  .controller('SunshadesIdCtrl', function ($scope, $routeParams, $location) {
    $scope.sunshade = {
      id:5,
      num:115,
      available: false,
      paid: true,
      customer: {
        id: 23,
        name: 'Fam. Benedetti',
        book: '23/07/2016'
      }
    };
    $scope.goTo = function(path, id) {
      $location.path(path + '/' + id);
    };
    $scope.goToUrl = function(path){
      $location.path(path);
    };
    //ajax al server per i dettagli del sunshade
  });
