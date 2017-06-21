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



}


// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;

}


// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService(maxItems) {
  var service = this;

  // List of shopping items
  var toBuyItems = [{name: milk, quantity: 10},{name: cookie, quantity: 10},{name: coke, quantity: 20},{name: pepsi, quantity: 4},{name: icecream, quantity: 7} ];
  var boughtItems = [];

  service.removeItem = function (itemIndex) {
    toBuyItems.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
}

})();
