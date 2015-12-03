'use strict';

angular
.module('platalbankClient')
.controller('TransactionlistController', ['$scope','$http',function($scope,$http){

    $http.get('http://localhost:8000/api/event/')
        .then(function(res){
            var l = res.data.count;
            $scope.events = new Array(l);
            $scope.transactions = new Array(l);
            $scope.transactionss = new Array(l);
            for(var i=0;i<l;i++){
                var x = res.data.results[i];
                $scope.events[x.id-1] = x.label;
                $scope.transactions[i] = [];
                $scope.transactionss[i] = [];
            }
    })
    $http.get('http://localhost:8000/api/transaction/')
        .then(function(res){
            var l =res.data.count;
            for (var i=0;i<l;i++){
                var x = res.data.results[i];
                var url = x.event;
                var ind = parseInt(url[url.length-2]);
                $scope.transactions[ind-1].push(x);
            };
        });
    //Pour tester
    /*$http.get('http://localhost:8000/api/transaction/')
        .then(function(res){
            var l =res.data.count;
            for (var i=0;i<l;i++){
                var x = res.data.results[i];
                $scope.transactionss[i] = x;
                var url = x.event;
                $http.get(url)
                    .then(function(res){
                        $scope.transactionss[i].event=res.data;
                        //console.log($scope.transactionss[i]);
                    });
            };

        });
    */
}]);

