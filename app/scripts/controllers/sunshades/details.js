'use strict';

/**
 * @ngdoc function
 * @name baechmeupUiApp.controller:SunshadesIdCtrl
 * @description
 * # SunshadesIdCtrl
 * Controller of the baechmeupUiApp
 */
angular.module('baechmeupUiApp')
  .controller('SunshadesIdCtrl', function ($scope, $routeParams, $location, SunshadeService) {
    $scope.sunshade = [];
    $scope.goTo = function(path, id) {
      $location.path(path + '/' + id);
    };
    $scope.goToUrl = function(path){
      $location.path(path);
    };
    $scope.goBackOne = function(path) {
      $location.path('/' + path);
    };
    $scope.getSunshade = function(){
      SunshadeService.getOneSunshade($routeParams.id).then(function(sunshade){
        $scope.sunshade = sunshade.data[0];

      }, function(err){
        console.error(err);
      })
    };

    $scope.getSunshade();

  });
