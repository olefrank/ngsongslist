'use strict';

angular.module('songapp.404', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/404', {
            templateUrl: 'src/404/404.html',
            controller: '404Ctrl'
        });

    }])

    .controller('404Ctrl', ['$scope', function ($scope) {

        $scope.page_title = "404 Not Found...";

    }]);