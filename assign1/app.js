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
      $scope.bColor = "red";
      $scope.fColor = "red";
    }
    else {
      var nCount = CountItems($scope.name);

      if (nCount <=3 )
      {
        $scope.customMessage  = "Enjoy!";
        $scope.bColor = "green";
        $scope.fColor = "green";
      }
      else {
        $scope.customMessage = "Too much!";
        $scope.bColor = "green";
        $scope.fColor = "green";
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

  function ValidateArray(stringArray){
    stringArray.every(function(item){ if( item == '' || item == null ) return true;})
    return false;
  }

};

})();

// !function(){"use strict";function e(e){function o(e){if(0==e.length)return 0;var o=e.split(",");return o.length}e.displayMessage=function(){if(null==e.name)e.customMessage="Please enter data first",e.bColor="red",e.fColor="red";else{var n=o(e.name);3>=n?(e.customMessage="Enjoy!",e.bColor="green",e.fColor="green"):(e.customMessage="Too much!",e.bColor="green",e.fColor="green")}}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
