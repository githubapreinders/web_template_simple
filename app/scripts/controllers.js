(function ()
{
    'use strict';

    angular.module('confab')
        .controller('IndexController', function ()
        {

            console.log('IndexController...');
            var vm = this;
            vm.message = "Angular Controller is wired up";
        });
})();


