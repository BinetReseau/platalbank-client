'use strict';

angular
.module('platalbankClient')
.directive('navbar', [function(){ 
    return {
        restrict: 'E',
        templateUrl: 'app/components/navbar/navbar.html',
        controller: 'NavbarController',
        controllerAs: 'navbar',
        bindToController: true
    };
}]);

