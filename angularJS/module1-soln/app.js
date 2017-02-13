
(function(){

'use strict';

angular.module('lunchApp',[])
		.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];		
function LunchController($scope) {

	$scope.lunchMenu = "";
	$scope.message ="";
	$scope.listLunchMenu= function (){
		var lunchMenu = $scope.lunchMenu;
		var items = lunchMenu.split(",");
		console.log(items);
		if (items.length>3)
			$scope.message = "too much food";
		else
			$scope.message = "Good Lunch";
	};	

}

})();


