(function ()
{
    'use strict';

    angular.module('confab')
    .controller('IndexController', function (StaticDataFactory, $sce)
    {

        console.log('IndexController');
        var vm = this;
        vm.submitForm = submitForm;
        vm.getLandingPage = getLandingPage;
        vm.message = "Angular Controller is wiring up";
        vm.htmlContent = "Filling this container with some server side html";

        function submitForm()
        {
        	vm.distortedText = "";
        }

        function getLandingPage()
        {
            StaticDataFactory.getLandingPage().then(function(data)
            {
                vm.htmlContent = $sce.trustAsHtml(data.data);
            },
            function(error)
            {
                console.log("error..." , err);
            });
        }

    });

})();


