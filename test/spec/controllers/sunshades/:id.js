'use strict';

describe('Controller: SunshadesIdCtrl', function () {

  // load the controller's module
  beforeEach(module('baechmeupUiApp'));

  var SunshadesIdCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SunshadesIdCtrl = $controller('SunshadesIdCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SunshadesIdCtrl.awesomeThings.length).toBe(3);
  });
});
