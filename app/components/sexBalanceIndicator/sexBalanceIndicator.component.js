'use strict';

function sexBalanceIndicatorController() {

}

angular.module('sappApp')
  .component('sexBalanceIndicator', {
    templateUrl: 'app/components/sexBalanceIndicator/sexBalanceIndicatorTpl.html',
    bindings: { female: '<', male: '<'},
    controller: sexBalanceIndicatorController
});
