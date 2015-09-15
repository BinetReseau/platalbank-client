(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .directive('eventunit', eventunit);

  /** @ngInject */
  function eventunit() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/eventunit/eventunit.html',
      controller: 'EventunitController',
      controllerAs: 'ev',
      bindToController: true,
      scope: {
        name: '=', // Name of the event
        transactions: '=', // Transaction list of the event
      }
    };
  }

})();
