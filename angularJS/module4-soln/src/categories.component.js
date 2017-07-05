(function(){
'use strict'

    angular.module('Data')
    .component('categories', {

        templateUrl: "src/categories.html",
        controller: CategoriesComponentController,
        bindings: {
          categories: '<'
        }
    });

})();
