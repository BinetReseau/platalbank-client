(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .controller('TransactionlistController', TransactionlistController);

  /** @ngInject */
  function TransactionlistController() {
    var _this = this;
    this.transactions = [
      {
        name: "Aujourd'hui",
        event:[
          {
            name:"mythe",
            transactions: [
            {
              creatorPic: "PIC",
              creator: "Victor Quach",
              name: "Un petit cadeau",
              date: "Midi pile",
              operations: { "Leo Gaspard": 42, "Victor Quach": -42 },
              amount: -42
            },
            {
              creatorPic: "PIC2",
              creator: "Binet Subaïsse",
              name: "Subventions",
              date: "Jamais",
              operations: { "Victor Quach": 1337, "Binet Subaïsse": -1337 },
              amount: 1337
            },
            ]
          },
         {
           name:"mythe2",
           transactions: [
           {
              creatorPic: "PIC3",
              creator: "BOB",
              name: "pipo",
              operations: { "YAO, Hua-Ting":9527, "Victor Quach":-9527},
              amount: 9527
           }
           ]
         },
        ]
      },
      {
        name: "Hier",
        event:[
          {
          name:"snoopy",
          transactions: [
            {
              creatorPic: "PIC",
              creator: "Victor Quach",
              name: "Un petit cadeau",
              date: "Midi pile",
              operations: { "Leo Gaspard": 42, "Victor Quach": -42 },
              amount: -42
            },
            {
              creatorPic: "PIC2",
              creator: "Binet Subaïsse",
              name: "Subventions subissance",
              eventName: "Un évènement très subissant : PlatalBank",
              date: "Jamais en fait",
              operations: { "Victor Quach": 1337, "Binet Subaïsse": -1337 },
              amount: 1337
            },
          ]
          },
        ]
      },
      {
        name: "Avant",
        event:[
          {
          name:"chocapix",
          transactions: [
            {
              creatorPic: "PIC",
              creator: "Victor Quach",
              name: "Un petit cadeau",
              date: "Midi pile",
              operations: { "Leo Gaspard": 42, "Victor Quach": -42 },
              amount: -42
            },
            {
              creatorPic: "PIC2",
              creator: "Binet Subaïsse",
              name: "Subventions",
              date: "Jamais",
              operations: { "Victor Quach": 1337, "Binet Subaïsse": -1337 },
              amount: 1337
            },
            {
              creatorPic: "PIC3",
              creator: "Vaneau",
              name: "C'est moi Vaneau",
              date: "Â-â-â-âvant",
              operations: { "Victor Quach": -1024, "Louis Vaneau": 1024 },
              amount: -1024
            }
            ]
          },
        ]
      }
    ];

    _this.toggleDisplay = function(event)
	{
		_this.showTransactions = !_this.showTransactions;
	}
  }
})();
