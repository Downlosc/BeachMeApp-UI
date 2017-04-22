'use strict';

/**
 * @ngdoc function
 * @name baechmeupUiApp.controller:SunshadesIdCtrl
 * @description
 * # SunshadesIdCtrl
 * Controller of the baechmeupUiApp
 */
angular.module('baechmeupUiApp')
  .controller('SunshadesIdCtrl', function ($scope, $routeParams) {
    $scope.sunshadeId = $routeParams.id;

    //ajax al server per i dettagli del sunshade
  });
