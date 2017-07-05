(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['items'];
function ItemsController(items) {
  var itemsCtrl = this;
  itemsCtrl.items = items.menu_items;
  console.log("Items in the controller are:" + JSON.stringify(items));
}

})();
