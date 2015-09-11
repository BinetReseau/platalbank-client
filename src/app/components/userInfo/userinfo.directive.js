(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .directive('userinfo', userinfo);

  /** @ngInject */
  function userinfo() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/userinfo/userinfo.html',
      controller: 'userInfoController',
      controllerAs: 'info',
      bindToController: true
    };

    return directive;
  }

})();
