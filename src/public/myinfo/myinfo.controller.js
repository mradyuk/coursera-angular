(function () {

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['$scope', '$rootScope'];
    function MyInfoController($scope, $rootScope) {
        var info = this;

        info.signupData = $rootScope.signupData;

        if ("undefined" === typeof info.signupData) {
            info.registered = false;
        } else {

            info.registered = true;
        }



        /*info.$onInit = function () {

            info.signupData = $rootScope.signupData;

            if ("undefined" === typeof info.signupData) {
                info.registered = false;
            } else {

                info.registered = true;
            }

            console.log(info.registered);

        };*/
    }

})();
