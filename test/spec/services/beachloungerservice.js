'use strict';

describe('Service: BeachloungerService', function () {

  // load the service's module
  beforeEach(module('baechmeupUiApp'));

  // instantiate service
  var BeachloungerService;
  beforeEach(inject(function (_BeachloungerService_) {
    BeachloungerService = _BeachloungerService_;
  }));

  it('should do something', function () {
    expect(!!BeachloungerService).toBe(true);
  });

});
