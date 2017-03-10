(function () {
  'use strict';
  angular.module('assignment1', []).controller('Assignment1Controller', Assignment1Controller);

  Assignment1Controller.$inject = [$scope];
  function Assignment1Controller($scope) {

    //$scope.lunch ="1,2,3,4,5" ;
    $scope.checkIfTooMuch = function () {

      if ($scope.lunch === "") {
        $scope.message = "Please enter data first";
      }

      var dishes = $scope.lunch.split(',');
      for (var i = 0; i < dishes.length; i++) {
        if (dishes[i] === "") {
          dishes.splice(i, 1);
        }
      }

      if (dishes.length > 3) {
        $scope.message = "Too much!";
      }
    }
  }


})();
