(function() {

  angular.module('intro', [])
      .controller('MainController', MainController);

  MainController.$inject = ['$scope'];//wha tools does the MainController need?

  function MainController ($scope){ //$scope is our bridge to the DOM
    console.log('Now main controlling...');
    $scope.person = 'Bob';
    $scope.letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
  }
}());
