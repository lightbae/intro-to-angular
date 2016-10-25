
(function() {
  angular.module('intro') //getter syntax
  .controller('MainController', MainController);

MainController.$inject = ['$scope', 'ToDoService']; //what tools does the MainController need?

function MainController ($scope, ToDoService){ //$scope is our bridge to the DOM
  console.log(ToDoService.get());
  ToDoService.create('make more todos');
  console.log(ToDoService.get());
  ToDoService.update(0,'buy some ramen');
  console.log(ToDoService.get());
  ToDoService.delete(2);
  console.log(ToDoService.get());
}

}());
