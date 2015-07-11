(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .controller('TransactionunitController', TransactionunitController);

  /** @ngInject */
  function TransactionunitController($scope) {
    var _this = this;
    var shown = undefined;
    $scope.toggleDisplay = function(event) {
      console.log("Showing this event:");
      console.log(event);
      event.target.showme = !event.target.showme;
      if (shown && shown.showme) // Inside an if so as to allow to close all transactions
        shown.showme = false;
      shown = event.target;
    }
  }
})();
