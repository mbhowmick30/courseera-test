(function(){
'use strict'

    angular.module('Data')
    .component('items', {
      templateUrl: 'src/itemtemplate.html',
      bindings: {
        items: '<'

    });

})();
