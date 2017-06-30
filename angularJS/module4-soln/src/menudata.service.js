(function(){

'use strict'

    angular.module('Data')
    .service('MenuDataService', MenuDataService);

    function MenuDataService(){

      var service = this;

      service.getAllCategories = function(){
        var response = $http({
          method: "GET",
          url: ("https://davids-restaurant.herokuapp.com/categories.json"),
        });

        return response.then(function(result){
          console.log("categories = "+result.data);
          var data = result.data.categories;
          return data;

        }).catch(function(error){
          console.log(error);
        });

      };

      service.getItemsForCategory= function(categoryShortName){

        var response = $http({
          method: "GET",
          url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName),
        });

        return response.then(function(result){
          console.log("Gargi here "+result.data);
          var data = result.data;
          return data;

        }).catch(function(error){
          console.log(error);
        });


      };




    }

})();
