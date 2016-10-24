
(function() {
  angular.module('intro') //getter syntax
  .controller('MainController', MainController);

MainController.$inject = ['$scope']; //what tools does the MainController need?

function MainController ($scope){ //$scope is our bridge to the DOM
  console.log('Now main controlling...');
  $scope.person = 'Bob';
  $scope.letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  $scope.saySurprise = saySurprise;

  function saySurprise(person) {
    //$scope.person =1; <<-- don' do this
    alert('Hey '+ person + '...there is a clown behind you!');
  }
}

}());
