(function(){
'use strict'

    angular.module('Data')
    .component('itemsInCategory', {
      templateUrl: 'src/itemtemplate.html',
      bindings: {
        items: '<'
}
    });

})();
