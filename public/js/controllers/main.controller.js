
(function() {
  angular.module('intro') //getter syntax
  .controller('MainController', MainController);

MainController.$inject = ['$scope', 'ToDoService']; //what tools does the MainController need?

function MainController ($scope, ToDoService){ //$scope is our bridge to the DOM
  $scope.todos = ToDoService.get(); //gimme this data and put it in the todos variable
  $scope.createTodo = createTodo;
  $scope.deleteTodo = deleteTodo;
  $scope.editTodo = editTodo;
  $scope.saveTodo = saveTodo;

  function createTodo(newTodo){
    ToDoService.create(newTodo);
    $scope.newTodo = '';
  }
  function deleteTodo(index){
    ToDoService.delete(index);
  }
  function editTodo(todo){
    todo.isBeingEdited = true;
  }

  function saveTodo(index, todo){
    ToDoService.update(index, todo.desc)
    todo.isBeingEdited = false;
  }
}
}());
