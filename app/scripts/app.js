'use strict';

angular.module('template1', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider)
    {
        $stateProvider

        // route for the home page
            .state('app', {
                url: '/',
                views: {
                    'content': {
                        templateUrl: 'views/home.html',
                        controller: 'IndexController as vm'
                    }
                }
            })
        ;
        $urlRouterProvider.otherwise('/');
    })
;