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
    $scope.sunshadeId = $routeParams.id;
    $scope.goToUrl = function(path){
      $location.path(path);
    };
    //ajax al server per i dettagli del sunshade
  });
