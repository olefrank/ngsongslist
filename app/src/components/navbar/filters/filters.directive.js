'use strict';

angular.module('songapp.navbar.filters.directive', [])

    .directive('filters', [function () {
        return {
            replace: 'true',
            templateUrl: 'src/components/navbar/filters/filters.tpl.html',
            link: function ($scope, $elem, $attrs) {}
        };

    }]);
