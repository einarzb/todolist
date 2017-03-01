app.controller('toDoCtrl', function($scope, toDoService) {
  $scope.toDoEmpty = toDoService.toDoEmpty; //scope that holds the sercive array

  $scope.userTask;
  $scope.userRate;
  //$scope.userCheck; //boolean

  //creats object and send it to service
  $scope.addToList = function(){
     var newTask = {task: $scope.userTask, rate:$scope.userRate};
     console.log(newTask);
     toDoService.addTaskToList(newTask); //invoke service function 
  };


});


//first create object from user input 
//than push it to list array
