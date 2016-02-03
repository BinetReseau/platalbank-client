'use strict';

angular
.module('platalbankClient')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/login');
}]);

