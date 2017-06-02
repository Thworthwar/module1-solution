(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.dishes = "";

    $scope.checkDishes = function () {
      if($scope.dishes === ""){
        $scope.results = "Please enter data first"
      } else{
        var numberOfDishes = $scope.dishes.split(',').length;
        if (numberOfDishes < 4 && numberOfDishes > 0){
          $scope.results = "Enjoy!"
        }else if (numberOfDishes > 3) {
          $scope.results = "Too much!"
        }
      }

    };
  }
})();
