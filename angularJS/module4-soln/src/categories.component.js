(function(){
'use strict'

    angular.module('Data')
    .component('myCategories', {

        templateUrl: "src/categoriestemplate.html",
        bindings: {
          categories: '<'
        }
    });

})();
