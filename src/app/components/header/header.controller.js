'use strict';

angular
.module('platalbankClient')
.controller('HeaderController', ['$scope',function($scope){
    $scope.photo = "../assets/images/photo.jpeg";
    $scope.balance = 1337;
}]);

