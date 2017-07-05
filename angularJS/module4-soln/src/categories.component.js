(function(){
'use strict'

    angular.module('Data')
    .component('categories', {

        templateUrl: "src/categoriestemplate.html",
        bindings: {
          categories: '<'
        }
    });

})();
