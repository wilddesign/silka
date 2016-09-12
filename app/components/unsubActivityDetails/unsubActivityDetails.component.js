'use strict';

function unsubActivityDetailsController(){ 
}

angular.module('sappApp')
  .component('unsubActivityDetails', {
    templateUrl: 'app/components/unsubActivityDetails/unsubActivityDetailsTpl.html',
    bindings: { data: '<' },
    controller: unsubActivityDetailsController
});
