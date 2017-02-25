'use strict';

describe('Service: SunshadeService', function () {

  // load the service's module
  beforeEach(module('baechmeupUiApp'));

  // instantiate service
  var SunshadeService;
  beforeEach(inject(function (_SunshadeService_) {
    SunshadeService = _SunshadeService_;
  }));

  it('should do something', function () {
    expect(!!SunshadeService).toBe(true);
  });

});
