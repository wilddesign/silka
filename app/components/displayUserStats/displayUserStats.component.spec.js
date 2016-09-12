'use strict';

describe('Component: displayUserStats', function () {

  // load the component's module
  beforeEach(module('sappApp.displayUserStats'));

  var displayUserStatsComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function ($componentController) {
    displayUserStatsComponent = $componentController('displayUserStats', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
