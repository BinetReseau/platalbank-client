'use strict';

angular
.module('platalbankClient')
.config(['$stateProvider',function($stateProvider) {
    $stateProvider
    .state('app', {
        abstract: true,
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
    });
}]);

