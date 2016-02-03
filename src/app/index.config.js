'use strict';

angular
.module('platalbankClient')
.config(['$logProvider','$mdThemingProvider',function($logProvider, $mdThemingProvider){
    // Enable log
    $logProvider.debugEnabled(true);
    $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('amber');
}]);
