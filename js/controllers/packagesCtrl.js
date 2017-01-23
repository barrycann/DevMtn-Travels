angular.module('devmtnTravel')
.controller('packagesCtrl', function($scope, mainSrv){
   $scope.packageData = mainSrv.travelInfo;
});