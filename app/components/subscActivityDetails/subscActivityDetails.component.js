'use strict';

function subscActivityDetailsController(){ 
}

angular.module('sappApp')
  .component('subscActivityDetails', {
    templateUrl: 'app/components/subscActivityDetails/subscActivityDetailsTpl.html',
    bindings: { data: '<' },
    controller: subscActivityDetailsController
});
