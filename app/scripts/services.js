(function(){

'use strict';
    var app = angular.module('confab');

    app.constant('API_URL', "http://localhost:3000");
    app.factory('StaticDataFactory', function($http, API_URL) 
    {

        return{
            getLandingPage : getLandingPage,
        };

        function getLandingPage()
        {
          return $http.get(API_URL + '/').then(function(data)
            {
                console.info("returnxing json from server with status ",data.status);
                return data;
                
            },function (error)
            {
              console.log("server error :", error );
            });
        }  

    })

    .directive('customDirective', function($compile)
    {
        return {
        restrict:  'E',
        template:'<div  ng-bind-html="vm.htmlContent"></div>'
        };
    });

})();   