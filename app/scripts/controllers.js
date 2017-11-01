(function ()
{
    'use strict';

    angular.module('confab')
        .controller('IndexController', function ()
        {

            console.log('IndexController...');
            var vm = this;
            vm.submitForm = submitForm;
            vm.message = "Angular Controller is wired up";

            function submitForm()
            {
            	vm.distortedText = "it works..."
            }

        });
})();


