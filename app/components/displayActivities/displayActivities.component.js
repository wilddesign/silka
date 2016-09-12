'use strict';

function displayActivitiesController(getDataFromServer) {
  this.userActivities = getDataFromServer.userActivities;
}

angular.module('sappApp')
  .component('displayActivities', {
    templateUrl: 'app/components/displayActivities/activitiesTpl.html',
    bindings: { userActivities: '<' },
    controller: displayActivitiesController
});
