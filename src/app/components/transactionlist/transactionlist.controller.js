'use strict';

angular
.module('platalbankClient')
.controller('TransactionlistController', ['$scope','$http','$q',function($scope,$http,$q){
    
    function fetchTransactionList() {
        $http.get('http://localhost:8000/api/transaction/').then(function(res){
            $scope.transactions = res.data.results;
            var len = $scope.transactions.length;
            for (var i=0; i < len; i++) {
                $scope.transactions[i].created_date = timeTransfer($scope.transactions[i].created)[0];
                $scope.transactions[i].created_time = timeTransfer($scope.transactions[i].created)[1];
                $scope.transactions[i].last_modified_date = timeTransfer($scope.transactions[i].last_modified)[0];
                $scope.transactions[i].last_modified_time = timeTransfer($scope.transactions[i].last_modified)[1];
            };
            groupByDate();
            groupByEvent();
        })
    };
    /*lst[0] = YYYY-MM-DD, lst[1] = hh:mm:ss*/
    function timeTransfer(str) {
        var lst = str.split("T");
        lst[1] = lst[1].split(".")[0];
        return lst;
    };

    /*
    function groupByDate() {
        var len = $scope.transactions.length;
        var timeUsed = [];
        $scope.groupBy = [];
        for (var i=0; i < len; i++) {
            var currentDate = $scope.transactions[i].last_modified_date;
            var ind = timeUsed.indexOf(currentDate);
            if (ind != -1) {
                $scope.groupBy[ind].transactions.push($scope.transactions[i]);
            } else {
                $scope.groupBy.push({date:currentDate,transactions:[]});
                timeUsed.push(currentDate);
                ind = timeUsed.indexOf(currentDate);
                $scope.groupBy[ind].transactions.push($scope.transactions[i]);
            }
        }
    }
    */
    function groupByEvent() {
        var len = $scope.groupBy.length;
        for (var i =0; i < len; i++) {
            var lst = $scope.groupBy[i].transactions;
            var lenTransactions = lst.length;
            var eventUsed = [];
            var l = [];
            for (var j=0; j < lenTransactions; j++) {
                var currentEvent = lst[j].event.label;
                var ind = eventUsed.indexOf(currentEvent);
                if (ind != -1) {
                    l[ind].transactions.push(lst[j]);
                } else {
                    l.push({event:lst[j].event,transactions:[]});
                    eventUsed.push(currentEvent);
                    ind = eventUsed.indexOf(currentEvent);
                    l[ind].transactions.push(lst[j]);
                }
            $scope.groupBy[i].transactions = l;
            }
        }
    }
    /* Assume that transaction list is sorted by date */
    function groupByDate() {
        var len = $scope.transactions.length;
        var currentDate = $scope.transactions[0].last_modified_date;
        var ind = 0;
        $scope.groupBy = [];
        $scope.groupBy.push({date:currentDate,transactions:[]});
        for (var i=0; i < len; i++) {
            if (currentDate == $scope.transactions[i].last_modified_date) {
                $scope.groupBy[ind].transactions.push($scope.transactions[i]);
            } else {
                currentDate = $scope.transactions[i].last_modified_date;
                $scope.groupBy.push({date:currentDate,transactions:[]});
                ind++;
                $scope.groupBy[ind].transactions.push($scope.transactions[i]);
            }
        }
    }

    fetchTransactionList();
}]);