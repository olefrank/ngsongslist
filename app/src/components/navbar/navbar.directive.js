'use strict';

angular.module('songapp.navbar.directive', [])

    .directive('navbar', [function () {
        return {
            replace: 'true',
            templateUrl: 'src/components/navbar/navbar.tpl.html',
            link: function ($scope, $elem, $attrs) {}
        };
    }]);
