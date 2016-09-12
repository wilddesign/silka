'use strict';
// controller has access to the data fetched from server
function displayUserStatsController(getDataFromServer) {
  this.userStats = getDataFromServer.userStats;
}

angular.module('sappApp')
  .component('displayUserStats', {
    templateUrl: 'app/components/displayUserStats/statsTpl.html',
    bindings: { userStats: '<' },
    controller: displayUserStatsController
});
