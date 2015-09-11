(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .controller('userInfoController', userInfoController);

  /** @ngInject */
  function userInfoController($mdDialog) {
    var _this = this;
    _this.user = {name:"Louis", surname:"Vaneau", shortname:"LVN", balance:"345", photo:"../assets/images/conscrit.jpg"};
  }
})();

