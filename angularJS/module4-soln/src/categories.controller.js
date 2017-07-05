(function () {
'use strict';

angular.module('Data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  var catCtrl = this;
  catCtrl.categories = categories;
  console.log("Gargi Inside controller");
}

})();
