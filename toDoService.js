app.service('toDoService', function(){
  
  //hard coded array 
  var toDo = [
    {task:"faxing credit cancellation",importance:10},
    {task:"golan telecom checkup",importance:4},
    {task:"go to workout",importance:8},
    {task:"finish brother minisite",importance:6}
   ];

  //dynamic array
  var toDoEmpty = [
  ];

  var addTaskToList = function(newTask){
   toDoEmpty.push(newTask);
   console.log(newTask);
   console.log(toDoEmpty); 
  };

  return { 
    toDoEmpty:toDoEmpty,
    addTaskToList:addTaskToList
  };
});

//services store data
//we construct them like controller. there are 2 kinds: service and factory.
//The function in a factory does not involve $scope - that's typically used for controllers
