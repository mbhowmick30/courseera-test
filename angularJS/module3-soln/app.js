(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list1',
    bindToController: true
  };

  return ddo;
}


function FoundItemsDirectiveController() {
  var list1 = this;
  //function that checks whether we should print msg "Nothing found"
  list1.checkForFoundItems = function(){
   return list1.items !== "Nothing found";
 }

}



// LIST #1 - controller
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  list.searchTerm = "";

  list.getMatchedMenuItems = function(searchTerm){

    if(!list.searchTerm.replace(/\s/g, '').length){
     list.found = "Nothing found";
   }
   else{
     MenuSearchService.getMatchedMenuItems(searchTerm).then(function(data){

       if(data.length !== 0){
         list.found = data;
       }else {
         list.found = "Nothing found";
       }
     }).catch(function(error){
          console.log(error);
        });
    }
  }


  list.removeItem = function (itemIndex) {
    // this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
    list.found.splice(itemIndex,1);
  };
}


// If not specified, maxItems assumed unlimited
MenuSearchService.$inject = ['$http', 'ApiBasePath'];

function MenuSearchService($http, ApiBasePath){
  var service = this;

  service.getMatchedMenuItems = function(searchTerm){
    return $http({
      method: "GET",
      url: ApiBasePath+"/menu_items.json"
    }).then(function(response){
      var data = response.data.menu_items;
      console.log("data= "+data);
      var result = [];
      for(var i=0; i<data.length; i++){
        if(data[i].description.toLowerCase().indexOf(searchTerm) == -1){
          console.log("data[i] = "+data[i]);
          result.push(data[i]);
        }
      }
      console.log("result= "+result);
      // console.log(response.data);
      return result;
    }).catch(function(error){
      console.log(error);
    })
  }

//   service.removeItem = function (itemIndex) {
//     items.splice(itemIndex, 1);
//   };

}


})();
