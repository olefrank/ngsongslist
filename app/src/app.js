'use strict';

// Declare app level module which depends on views, and components
angular.module('songapp', [
    'ngRoute',
    'angular.filter',
    'songapp.main',
    'songapp.404',
    'songapp.difficulty',
    'songapp.navbar',
    'songapp.metadata',
    'songapp.songs',
    'songapp.song',
    'songapp.rating'
])

    .config(
        ['$locationProvider', '$routeProvider', '$httpProvider',
            function ($locationProvider, $routeProvider, $httpProvider) {
                $locationProvider.hashPrefix('!');
                $routeProvider.otherwise({redirectTo: '/main'});

                $httpProvider.defaults.withCredentials = true;
            }])

    .run(['$rootScope', '$location', function ($rootScope, $location) {

        // $rootScope.$on('$routeChangeStart', function(e, curr, prev) {
        //     if (curr.$$route && curr.$$route.resolve) {
        //         // Show a loading message until promises aren't resolved
        //         $rootScope.loadingView = true;
        //     }
        // });

        // $rootScope.$on('$routeChangeSuccess', function(e, curr, prev) {
        //     // Hide loading message
        //     $rootScope.loadingView = false;
        // });

        $rootScope.$on('$routeChangeError', function(event, curr, prev, reject) {
            $location.url('/404');
        });

    }]);
