
(function() {
  angular.module('intro') //getter syntax
  .controller('MainController', MainController);

MainController.$inject = ['$scope', 'ToDoService']; //what tools does the MainController need?

function MainController ($scope, ToDoService){ //$scope is our bridge to the DOM
  $scope.todos = ToDoService.get(); //gimme this data and put it in the todos variable
  $scope.createTodo = createTodo;

  function createTodo(newTodo){
    ToDoService.create(newTodo);
    $scope.newTodo = '';
  }

}

}());
