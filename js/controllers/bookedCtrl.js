angular.module('devmtnTravel')
.controller('bookedCtrl', function($scope, mainSrv, $state){
   var bookId = $state.params.id;
   $scope.data = mainSrv.travelInfo;

   for(var i in $scope.data){
      if($scope.data[i].id == bookId){
         $scope.booked = $scope.data[i];
      }
   }
});