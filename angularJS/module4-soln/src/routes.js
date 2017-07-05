(function(){
'use strict'

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'src/home.html'
      })


      .state('Mycategories', {
      url: '/categories',
      templateUrl: 'src/categories.html',
      controller: 'CategoriesController as catCtrl',
      resolve: {
          categories: ['MenuDataService', function (MenuDataService){
              return MenuDataService.getAllCategories();
              }]
          }
    })


    .state('items', {
    url: '/items/{shortName}',
    templateUrl: 'src/items.html',
    controller: 'ItemsController as itemsCtrl',
    resolve: {
            items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.shortName);
            }]
    }
  });


    }

})();
