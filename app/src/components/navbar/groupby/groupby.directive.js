'use strict';

angular.module('songapp.navbar.groupby.directive', [])

    .directive('groupby', [function () {
        return {
            replace: 'true',
            templateUrl: 'src/components/navbar/groupby/groupby.tpl.html',
            link: function ($scope, $elem, $attrs) {}
        };

    }]);
