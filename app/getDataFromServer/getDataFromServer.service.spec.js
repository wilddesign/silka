'use strict';

describe('Service: getDataFromServer', function () {

  // load the service's module
  beforeEach(module('sappApp.getDataFromServer'));

  // instantiate service
  var getDataFromServer;
  beforeEach(inject(function (_getDataFromServer_) {
    getDataFromServer = _getDataFromServer_;
  }));

  it('should do something', function () {
    expect(!!getDataFromServer).to.be.true;
  });

});
