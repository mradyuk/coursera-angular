(function () {

    angular.module('public')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['SignupDataService', '$scope', '$rootScope'];
    function RegistrationController(SignupDataService, $scope, $rootScope) {
        var reg = this;

        reg.submit = function () {
            SignupDataService.setData(reg.user);
            //console.log( $scope.signupData = SignupDataService.getData());
            SignupDataService.getMenu().then(function (result) {
                console.log("result", result);
                if ("undefined" === typeof result) {

                    reg.completed = false;
                    reg.menuNotFound = true;
                } else {

                    $rootScope.signupData = [];
                    $rootScope.signupData.menu = result;
                    $rootScope.signupData.firstname = reg.user.firstname;
                    $rootScope.signupData.lastname = reg.user.lastname;
                    $rootScope.signupData.email = reg.user.email;
                    $rootScope.signupData.phone = reg.user.phone;

                   /* SignupDataService.getImage(result.short_name).then(function (img) {
                        console.log("img", img);
                        $rootScope.signupData.menu.img = img;

                    });*/

                    reg.completed = true;
                    reg.menuNotFound  =false;
                }

            });


        };
    }

})();
