(function () {

    'use strict';

    angular.module('ShoppingListApp', [])
        .controller('ShoppingListBuyController', ShoppingListBuyController)
        .controller('ShoppingListDoneController', ShoppingListDoneController)
        .service('ShoppingListService', ShoppingListService);

    ShoppingListBuyController.$inject = ['ShoppingListService'];
    ShoppingListDoneController.$inject = ['ShoppingListService'];


    function ShoppingListBuyController(ShoppingListService) {

        var shoppingList = this;

        shoppingList.listIsEmpty = false;

        shoppingList.items = ShoppingListService.getToDoItems();


        shoppingList.removeItem = function (itemIndex) {
            ShoppingListService.removeItem(itemIndex);
            if (shoppingList.items.length === 0) {
                shoppingList.listIsEmpty = true;
            }
        };

    }

    function ShoppingListDoneController(ShoppingListService) {

        var doneList = this;
        doneList.listIsEmpty = true;

        doneList.items = ShoppingListService.getDoneItems();
    }

    function ShoppingListService() {
        var service = this;

        // List of shopping items
        var todo = [
            { name: "cookies", quantity: 10 },
            { name: "soda", quantity: 1 },
            { name: "cake", quantity: 3 },
            { name: "spagetti", quantity: 5 },
            { name: "avocado", quantity: 10 }
        ];

        var done = [];

        service.removeItem = function (itemIdex) {
            var deleted = todo.splice(itemIdex, 1);
            Array.prototype.push.apply(done, deleted);
        };

        service.getToDoItems = function () {
            return todo;
        };

        service.getDoneItems = function () {
            return done;
        };
    }


})();