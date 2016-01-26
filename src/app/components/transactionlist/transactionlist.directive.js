'use strict';

angular
  .module('platalbankClient')
  .directive('transactionlist', [function(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/transactionlist/transactionlist.html',
      controller: 'TransactionlistController',
      controllerAs: 'tl',
      scope: true,
      bindToController: true
    };
}]);
