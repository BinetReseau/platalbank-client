(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .directive('transactionlist', transactionlist);

  /** @ngInject */
  function transactionlist() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/transactionlist/transactionlist.html',
      controller: 'TransactionlistController',
      controllerAs: 'transactionlist',
      bindToController: true
    };

    return directive;
  }

})();
