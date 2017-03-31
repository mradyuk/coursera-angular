(function () {

    angular.module('public')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['SignupDataService', '$scope'];
    function RegistrationController(SignupDataService, $scope) {
        var reg = this;

        reg.submit = function () {
            SignupDataService.setData(reg.user);
         //console.log( $scope.signupData = SignupDataService.getData());
            SignupDataService.getMenu().then(function (result) {
                console.log("result", result);
                if("undefined" === typeof result){
                    reg.menuNotFound = true;
                    reg.completed = false;
                } else{
                    reg.menuNotFound = false;
                    reg.completed = true;
                }

            });



        };
    }

})();
