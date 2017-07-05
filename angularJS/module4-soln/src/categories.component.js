(function(){
'use strict'

    angular.module('Data')
    .component('categories', {

        templateUrl: "src/categories.html",
        controller: CategoriesController,
        bindings: {
          categories: '<'
        }
    });

})();
