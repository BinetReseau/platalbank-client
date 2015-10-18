'use strict';

angular
.module('platalbankClient')
.directive('transactionunit', [function(){
    return {
        restrict: 'E',
        templateUrl: 'app/components/transactionunit/transactionunit.html',
        controller: 'TransactionunitController',
        controllerAs: 't',
        bindToController: true,
        scope: {
            creatorPic: '=', // Picture of the legal person who created the transaction
            creator: '=', // Name of the legal person who created the transaction
            name: '=', // Name of the transaction
            date: '=', // Date of the transaction
            eventName: '=', // Name of the event this transaction is bound to, if defined
            operations: '=', // Map of operations, eg. { A: -5, B: +5 }
            amount: '=' // Balance change due to this transaction for current user, eg. if named A, -5
        }
    };
}]);

