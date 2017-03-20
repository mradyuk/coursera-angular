(function () {

    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService).constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
        .directive('foundItems', FoundItems);

    function FoundItems() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                foundItems: '<menu.found',
                onRemove: '&onRemove'
            },
            controller: NarrowItDownController,
            controllerAs: 'menu',
            bindToController: true
        };

        return ddo;
    }



    NarrowItDownController.$inject = ['MenuSearchService'];


    function NarrowItDownController(MenuSearchService) {

        var menu = this;
        menu.searchTerm = '';

        menu.search = function () {

            var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

            promise.then(function (response) {
                menu.found = response;
            }).catch(function (error) {
                console.log("Something went terribly wrong.");
            });

            return menu.found;
        };

        menu.onRemove = function (index) {
            menu.found.splice(index, 1);
        };


    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function (response) {

                var foundItems = [];
                var menuItems = response.data.menu_items;

                for (var i = 0; i < menuItems.length; i++) {

                    if (menuItems[i].description.indexOf(searchTerm) > -1) {
                        foundItems.push(menuItems[i]);
                    }

                }

                console.log('menu found', foundItems);
                return foundItems;
            }).catch(function (error) {
                console.log(error);
            });

        };
    }


})();