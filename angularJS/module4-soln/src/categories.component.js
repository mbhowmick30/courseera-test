(function(){
'use strict'

    angular.module('Data')
    .component('categories', {

        templateUrl: "src/categories.template.html",
        controller: CategoriesComponentController,
        bindings: {
          categories: '<'
        }
    });

    CategoriesComponentController.$inject = ['$rootScope','$element','$q', '$MenuDataService'];
    function CategoriesComponentController ($rootScope,$element,$q, $MenuDataService){

      $ctrl = this;
      $ctrl.$doCheck= function (){



      };

    }


})();
