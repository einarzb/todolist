app.controller('toDoCtrl', function($scope, toDoService) {
  $scope.toDoEmpty = toDoService.toDoEmpty; //scope that holds the sercive array

  $scope.userTask;
  $scope.userRate;
  //an object with 2 properties
  $scope.userCheckboxModel = {
       value1 : true,
       value2 : false
     };
   //boolean

  //creats object and send it to service
  $scope.createTask = function(){
     var newTask = {task: $scope.userTask, rate:$scope.userRate, check:$scope.userCheckboxModel.value1};
     //console.log(newTask);
     toDoService.addTaskToList(newTask); //invoke service function 
  };

  //finds item to remove from the array and send it to service
  $scope.removeFromList = function (task) {
    var index = $scope.toDoEmpty.indexOf(task);
    console.log("task is: " + task.name);
    console.log("index of task is: " + index);
    toDoService.removeTaskFromList(index);
  }

});
