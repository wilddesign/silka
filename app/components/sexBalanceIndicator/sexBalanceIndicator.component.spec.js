'use strict';

describe('Component: sexBalanceIndicator', function () {

  // load the component's module
  beforeEach(module('sappApp'));

  var sexBalanceIndicatorComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function ($componentController) {
    sexBalanceIndicatorComponent = $componentController('sexBalanceIndicator', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
