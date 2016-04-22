angular.module('app')
    .controller('homectrl',function($scope,$window){

        $scope.books='something different';

        $scope.inputModel="";
        $scope.thingstodo=['wake up','shower','get dressed'];

        $scope.gettodo=function(){
          var string = $window.localStorage.thingstodo;
          $scope.thingstodo = string.split(",") ;
        };

        $scope.pushtodo=function(item){
          $scope.thingstodo.push(item)
          $scope.inputModel="";
          $scope.keeptodo();
        };

        $scope.read=function(input){
          $scope.inputModel = input;
        };

        $scope.keeptodo=function(){

          $window.localStorage.thingstodo=$scope.thingstodo;
        };

        $scope.delete=function(index){
          $scope.thingstodo.splice(index,1);
          $scope.keeptodo();
        }

});
