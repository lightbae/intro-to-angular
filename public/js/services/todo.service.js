(function() {
  angular.module('intro')
         .factory('ToDoService', ToDoService);

  ToDoService.$inject = [];

  function ToDoService() {

    var data = [
      {desc: 'take a nap'}, //is a todo object instead of a todo string
      {desc: 'take another nap'},
      {desc: 'get some milk'},
      {desc: 'win the lotto'}
    ];

    return {
      get: get,
      create: create,
      update: update,
      delete: remove
    };

    function get(){
      return data;
    }
    function create( {desc: description} ) {
      data.push(description); //push is an array method
    }
    function update(index,newDescription){
      data.splice(index, 1, {desc: newDescription});
    }
    function remove(index){
      data.splice(index,1);
    }
  }
}());
