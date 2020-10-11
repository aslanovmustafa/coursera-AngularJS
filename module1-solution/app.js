(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.inputList="";
        $scope.output = "";
    
    $scope.CheckIfTooMuch = function () {
        var result = checkSize($scope.inputList);
        $scope.output = result;
    };    

    function checkSize(string){
        var strRes = "";
        var txt = string.length;
        if (txt>0){
        var sizeOfList = $scope.inputList.split(",").length;

        if (sizeOfList<=3) strRes = "Enjoy!";
        else if (sizeOfList>3) strRes =  "Too Much!";
        return strRes;}

        else {strRes = "Please enter data first"; return strRes;
        }
    
    };


}
    })();
