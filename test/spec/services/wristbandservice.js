'use strict';

describe('Service: WristbandService', function () {

  // load the service's module
  beforeEach(module('baechmeupUiApp'));

  // instantiate service
  var WristbandService;
  beforeEach(inject(function (_WristbandService_) {
    WristbandService = _WristbandService_;
  }));

  it('should do something', function () {
    expect(!!WristbandService).toBe(true);
  });

});
