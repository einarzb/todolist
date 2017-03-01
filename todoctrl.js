app.controller('toDoCtrl', function($scope, toDoService) {
  $scope.toDoEmpty = toDoService.toDoEmpty; //scope that holds the sercive array

  $scope.userTask;
  $scope.userRate;
  $scope.checked = false; //boolean for chxbox
  $scope.listContainer = false; //hide
  $scope.date = new Date();

  //creats object and send it to service
  $scope.createTask = function(){
    $scope.listContainer = true;
     var newTask = {task: $scope.userTask, rate:$scope.userRate, check:$scope.checked};
     toDoService.addTaskToList(newTask); //invoke service function 
     $scope.userTask = "";
     $scope.userRate = "";
    };

  //finds item to remove from the array and send it to service
  $scope.removeFromList = function (index) {
    var user;
      if (confirm("are you sure you've done it? you lazy fuck") == true) {
          user = toDoService.removeTaskFromList(index);
      } else {
          user;
      }
    //toDoService.removeTaskFromList(index);
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
