'use strict';

describe('Component: subscActivityDetails', function () {

  // load the component's module
  beforeEach(module('sappApp'));

  var subscActivityDetailsComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function ($componentController) {
    subscActivityDetailsComponent = $componentController('subscActivityDetails', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
