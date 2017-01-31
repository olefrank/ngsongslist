'use strict';

angular.module('songapp.rating.directive', [])

    .directive('rating', [function () {
        return {
            replace: 'true',
            templateUrl: 'src/components/rating/rating.tpl.html',
            link: function ($scope, $elem, $attrs) {

                $scope.ratingwidth = $scope.song.rating * 20;
            }
        };

    }]);
