'use strict';

angular
.module('platalbankClient')
.config(['$stateProvider',function($stateProvider){
     $stateProvider
     .state('login', {
         url: '/login',
         templateUrl: 'app/components/login/login.html',
         controller: 'LoginController',
         controllerAs: 'login'
     });
}]);

