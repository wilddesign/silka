'use strict';

describe('Component: displayActivities', function () {

  // load the component's module
  beforeEach(module('sappApp.displayActivities'));

  var displayActivitiesComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function ($componentController) {
    displayActivitiesComponent = $componentController('displayActivities', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
