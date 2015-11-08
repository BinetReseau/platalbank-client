(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .controller('HeaderController', HeaderController);

  /** @ngInject */
  function HeaderController() {
    var _this = this;
    _this.photo = "../assets/images/photo.jpeg";
    _this.balance = 1337;
  }

})();
