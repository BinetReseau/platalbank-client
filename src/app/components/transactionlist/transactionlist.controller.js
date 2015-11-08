'use strict';

angular
.module('platalbankClient')
.controller('TransactionlistController', ['$scope','$http',function($scope,$http){
    $scope.transactions = [{
        "id": 1,
        "state": "P",
        "amount": 25,
        "label": "Nom d'une transaction",
        "debited_account": "http://127.0.0.1:8000/api/account/1/",
        "credited_account": "http://127.0.0.1:8000/api/account/2/",
        "timestamp": "2015-10-18T14:11:15.102151Z",
        "last_modified": "2015-10-18T14:11:06.911348Z",
        "author": "Dummy"
    }];
}]);

