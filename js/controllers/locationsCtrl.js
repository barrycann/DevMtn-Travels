angular.module('devmtnTravel')
.controller('locationsCtrl', function($scope, mainSrv){
   $scope.locationData = mainSrv.travelInfo;
});