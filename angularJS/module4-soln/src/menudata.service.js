(function(){

'use strict'

    angular.module('Data')
    .service('MenuDataService', MenuDataService);

    function MenuDataService(){

      var service = this;

      service.getAllCategories = function(){
        return $http({
          method: "GET",
          url: ("https://davids-restaurant.herokuapp.com/categories.json"),
        })

        .then(function(result){
          console.log("categories = "+result.data);
          var data = result.data;
          console.log("categories:" + JSON.stringify(data));
          return data;

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
          var data = result.data;
          console.log("items:" + JSON.stringify(data));
          return data;

        }).catch(function(error){
          console.log(error);
        });


      };




    }

})();
