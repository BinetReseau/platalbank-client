'use strict';

angular
.module('platalbankClient')
.controller('NavbarController', ['$scope','$mdDialog', function($scope, $mdDialog) {
    $scope.binets = [{longname: 'Binet Réseau', shortname: 'BR', balance:'2000', logo:''},
                    {longname:'Binet Binouze', shortname:'Binouze', balance:'20', logo:''},
                    {longname:'Subaïsse', shortname:'subaisse', balance:'-443', logo:''},
                    {longname:'JTX', shortname:'JTX', balance:'12833', logo:''},
                    {longname:'Cabinet Start-up', shortname:'cabinet_start_up', balance:'3', logo:''}];
    $scope.showBinets = true;
    $scope.navigateTo = function(to, event) {
      $mdDialog.show(
        $mdDialog.alert()
          .title('Navigating')
          .content('Imagine being taken to ' + to)
          .ariaLabel('Navigation demo')
          .ok('Neat!')
          .targetEvent(event)
      );
    }; 
   $scope.toggleDisplay = function(event){
      $scope.showBinets=$scope.showBinets; 
    }

}]);
