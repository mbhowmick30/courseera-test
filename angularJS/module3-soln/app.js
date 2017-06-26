(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}


function FoundItemsDirectiveController() {
  var list = this;
  return false;

}



// LIST #1 - controller
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;

  list.getMatchedMenuItems = function(searchTerm){
    list.found = MenuSearchService.getMatchedMenuItems(searchTerm);
    console.log("Found: "+list.found);
  }


  list.removeItem = function (itemIndex) {
    // this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
    MenuSearchService.removeItem(itemIndex);
  };
}


// If not specified, maxItems assumed unlimited
function MenuSearchService() {
  var service = this;

  service.getMatchedMenuItems =  function (searchTerm) {

    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        description: searchTerm
      }
    });

    return response.then(function(result){

      // process result and only keep items that match
      var foundItems = results;

      // return processed items
      return foundItems;


    });

  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };
}

})();
