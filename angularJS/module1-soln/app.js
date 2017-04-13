
(function(){

'use strict';

angular.module('lunchApp',[])
		.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];		
function LunchController($scope) {
	
	$scope.listLunchMenu= function (){
		var lunchMenu = $scope.lunchMenu;
		var items = -1;
		if(lunchMenu =="" || lunchMenu == undefined)
			items=0;
		else 
			items = lunchMenu.split(",").length;
		
		console.log(items);
		if(items==-1)
			$scope.message ="";
		else if(items==0)
			$scope.message = "Enter data first";
		else if (items>3)
			$scope.message = "too much food";
		else
			$scope.message = "Good Lunch";
	};	

}

})();


