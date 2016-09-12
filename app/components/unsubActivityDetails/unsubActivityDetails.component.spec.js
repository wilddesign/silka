'use strict';

describe('Component: unsubActivityDetails', function () {

  // load the component's module
  beforeEach(module('sappApp'));

  var unsubActivityDetailsComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function ($componentController) {
    unsubActivityDetailsComponent = $componentController('unsubActivityDetails', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
