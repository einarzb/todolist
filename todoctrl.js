app.controller('toDoCtrl', function($scope, toDoService) {
  $scope.toDoEmpty = toDoService.toDoEmpty; //scope that holds the sercive array

  $scope.userTask;
  $scope.userRate;
  $scope.checked = false; //boolean for chxbox
  $scope.listContainer = false; //hide
  $scope.date = new Date();

  //creats object and send it to service
  $scope.createTask = function(){
     if($scope.userTask){  
       $scope.listContainer = true; //reveal lists display
       var newTask = {task: $scope.userTask, rate:$scope.userRate, check:$scope.checked};
       toDoService.addTaskToList(newTask); //invoke service function 
    } else { alert("your first task is to fill in a task... "); };

       $scope.userTask = "";
       $scope.userRate = "";
    };

  //finds item to remove from the array and send it to service
  $scope.removeFromList = function (index) {
    var removeConfirm;
      if (confirm("are you sure you've done it? you lazy fuck") == true) {
          removeConfirm = toDoService.removeTaskFromList(index);
      } else {
          removeConfirm;
      }
  };

  //checkbox toggle
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
