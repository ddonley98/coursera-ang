(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.displayMessage = function () {

    if($scope.name == null)
    {
      $scope.customMessage = "Please enter data first";
    }
    else {
      var nCount = CountItems($scope.name);

      if (nCount <=3 )
      {
        $scope.customMessage  = "Enjoy!";
      }
      else {
        $scope.customMessage = "Too much!";
      }
    }
  };

  function CountItems(string){
    if (string.length == 0){
      return 0;
    }

    var arrayOfStrings = string.split(',');

    return arrayOfStrings.length;
  }

};



})();
(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.displayMessage = function () {

    if($scope.name == null)
    {
      $scope.customMessage = "Please enter data first";
    }
    else {
      var nCount = CountItems($scope.name);

      if (nCount <=3 )
      {
        $scope.customMessage  = "Enjoy!";
      }
      else {
        $scope.customMessage = "Too much!";
      }
    }
  };

  function CountItems(string){
    if (string.length == 0){
      return 0;
    }

    var arrayOfStrings = string.split(',');

    return arrayOfStrings.length;
  }

};



})();
