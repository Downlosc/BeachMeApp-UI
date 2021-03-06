'use strict';

describe('Controller: BarCtrl', function () {

  // load the controller's module
  beforeEach(module('baechmeupUiApp'));

  var BarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BarCtrl = $controller('BarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BarCtrl.awesomeThings.length).toBe(3);
  });
});
