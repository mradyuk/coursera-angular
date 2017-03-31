(function () {
    'use strict';

    angular.module('public')
        .service('SignupDataService', SignupDataService)
        .constant('ApiBasePath', "https://limitless-refuge-35558.herokuapp.com");
    ;

    SignupDataService.$inject = ['$http', 'ApiBasePath']
    function SignupDataService($http, ApiBasePath) {
        var service = this;
        var signupData;

        service.setData = function (signupData) {
            service.signupData = signupData;
            // $window.localStorage['signupData'] = signupData;

        };

        service.getData = function () {
            // var signupData = $window.localStorage['signupData']
            return service.signupData;
        };

        service.getMenu = function () {

            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items/" + service.signupData.menuNumber + ".json ")
            }).then(function (response) {
                var menu = response.data;
                console.log('categories found', menu);
                return menu;
            }).catch(function (error) {
                console.log(error);
            });

        };


    }

})();
