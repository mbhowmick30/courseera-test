(function(){

'use strict'

    angular.module('Data')
    .service('MenuDataService', MenuDataService);

    function MenuDataService(){

      var service = this;
      var categories = [];
      var items = [];

      service.getAllCategories = function(){
        return $http({
          method: "GET",
          url: ("https://davids-restaurant.herokuapp.com/categories.json"),
        })

        .then(function(result){
          console.log("categories = "+result.data);
          categories = result.data;
          console.log("categories:" + JSON.stringify(categories));
          return categories;

        },function error (response){
          console.log(reponse);
        });

      };

      service.getItemsForCategory= function(categoryShortName){

        var response = $http({
          method: "GET",
          url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName),
        });

        return response.then(function(result){
          console.log("Gargi here "+result.data);
          items = result.data;
          console.log("items:" + JSON.stringify(items));
          return items;

        }).catch(function(error){
          console.log(error);
        });


      };




    }

})();
