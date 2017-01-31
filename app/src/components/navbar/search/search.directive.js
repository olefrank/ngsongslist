'use strict';

angular.module('songapp.navbar.search.directive', [])

    .directive('search', [function () {
        return {
            replace: 'true',
            templateUrl: 'src/components/navbar/search/search.tpl.html',
            link: function ($scope, $elem, $attrs) {}
        };

    }]);
