
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
		var items = -1;
		if(lunchMenu =="" || lunchMenu == undefined)
			items=0;
		else 
			items = lunchMenu.split(",");
		
		console.log(items);
		if(items.length==-1)
			$scope.message ="";
		else if(items.legth==0)
			$scope.message = "Enter data first";
		else if (items.length>3)
			$scope.message = "too much food";
		else
			$scope.message = "Good Lunch";
	};	

}

})();


