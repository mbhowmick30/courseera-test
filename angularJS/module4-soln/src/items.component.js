(function(){
'use strict'

    angular.module('Data')
    .component('items', {
      templateUrl: 'src/templates/template.html',
      bindings: {
        items: '<'

    });

})();
