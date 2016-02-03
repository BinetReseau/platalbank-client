'use strict';

angular
.module('platalbankClient')
.directive('header',  [function(){
    return {
        restrict: 'E',
        templateUrl: 'app/components/header/header.html',
        controller: 'HeaderController',
        controllerAs: 'header',
        bindToController: true
    };
}]);
