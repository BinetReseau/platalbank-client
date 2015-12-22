'use strict';

angular
.module('platalbankClient')
.controller('TransactionlistController', ['$scope','$http','$q',function($scope,$http,$q){
    function fetchTransactionList(){
        $http.get('http://localhost:8000/api/transaction/').then(function(res){
            $scope.transactions = res.data.results;
            var len = $scope.transactions.length;
            for(var i=0;i < len;i++){
                $scope.transactions[i].created_date = timeTransfer($scope.transactions[i].created)[0];
                $scope.transactions[i].created_time = timeTransfer($scope.transactions[i].created)[1];
                $scope.transactions[i].last_modified_date = timeTransfer($scope.transactions[i].last_modified)[0];
                $scope.transactions[i].last_modified_time = timeTransfer($scope.transactions[i].last_modified)[1];

            };
            groupByTime();
        })
    };

    function timeTransfer(str){
        var lst = str.split("T");
        lst[1] = lst[1].split(".")[0];
        return lst;
    };

    function groupByTime(){
        var len = $scope.transactions.length;
        var timeUsed = [];
        $scope.groupBy = [];
        for(var i=0;i < len; i++){
            var currentDate = $scope.transactions[i].last_modified_date;
            var ind = timeUsed.indexOf(currentDate);
            if(ind != -1){
                $scope.groupBy[ind].transactions.push($scope.transactions[i]);
            }
            else{
                $scope.groupBy.push({date:currentDate,transactions:[]});
                timeUsed.push(currentDate);
                ind = timeUsed.indexOf(currentDate);
                $scope.groupBy[ind].transactions.push($scope.transactions[i]);
            }
        }
    }

    fetchTransactionList();
}]);