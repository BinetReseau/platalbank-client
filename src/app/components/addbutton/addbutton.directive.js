(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .directive('addbutton', addbutton);

  /** @ngInject */
  function addbutton() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/addbutton/addbutton.html',
      controller: '',
      controllerAs: '',
      bindToController: true
    };

    return directive;
  }

})();
