app.controller('toDoCtrl', function($scope, toDoService) {
  $scope.toDoEmpty = toDoService.toDoEmpty; //scope that holds the sercive array

  $scope.userTask;
  $scope.userRate;
  //an object with 2 properties
  $scope.userCheckboxModel = {
       value1 : true,
       value2 : false
     };

  $scope.checked = false;
   //boolean

  //creats object and send it to service
  $scope.createTask = function(){
     var newTask = {task: $scope.userTask, rate:$scope.userRate, check:$scope.userCheckboxModel.value1};
     toDoService.addTaskToList(newTask); //invoke service function 
     $scope.userTask = "";
     $scope.userRate = "";
    };

  //finds item to remove from the array and send it to service
  $scope.removeFromList = function (index) {
    toDoService.removeTaskFromList(index);
  };

  $scope.checkBox = function(){
    if($scope.checked){
      $scope.checked = false;
      console.log('you changed the ole check thing')
      console.log($scope.checked)
    }else{
      $scope.checked = true;
      console.log('you changed the ole check thing')
      console.log($scope.checked)
    }
  };

});
