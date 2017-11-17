(function(){
    'use strict';

    angular.module("LunchCheck", [])
    .controller("LunchCheckController",LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope) {

        $scope.check = function(){
            var dishes          = $scope.dishes || "",
                arrayOfDishes   = dishes.split(',') ;
            
            if(dishes !== ""){
                $scope.message = (arrayOfDishes.length <= 3) ? "Enjoy!": "Too Much!";
                $scope.state = "success";
            }else{
                $scope.message = "Please enter data first";
                $scope.state = "error";
            }
            
            
        }
        
    }
    

})(window)