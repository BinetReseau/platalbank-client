'use strict';

angular
.module('platalbankClient')
.controller('TransactionlistController', ['$scope','$http',function($scope,$http){
    $http.get('http://localhost:8000/api/transaction/')
        .then(function(res){
            $scope.transactions = res.data.results;   
        });
}]);

