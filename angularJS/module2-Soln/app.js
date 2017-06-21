(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;

  list1.bought = function(itemIndex){
    ShoppingListCheckOffService.bought(itemIndex);
  }

  list1.items = ShoppingListCheckOffService.getToBuyItems();
  console.log("items: "+list1.items);
  if(list1.items.length ==0){
    list1.errorMessage =  "Everything is bought!"
  }
  else {
    list1.errorMessage =  ""
  }


}


// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;

  list2.items = ShoppingListCheckOffService.getItemsBought();

  if(list2.items.length == 0)
    list2.errorMessage = "Nothing bought yet.";
    else {
      list2.errorMessage = "";
    }

}


// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [{name: 'milk', quantity: 10},{name: 'cookie', quantity: 10},{name: 'coke', quantity: 20},{name: 'pepsi', quantity: 4},{name: 'icecream', quantity: 7} ];
  var boughtItems = [];

  service.bought = function (itemIndex) {
    var item = toBuyItems[itemIndex];
    boughtItems.push(item);
    toBuyItems.splice(itemIndex, 1);
  };

  service.getItemsBought = function () {
    return boughtItems;
  };

  service.getToBuyItems = function(){
    return toBuyItems;
  };
}

})();
