'use strict';

angular.module('songapp.metadata.directive', [])

    .directive('metadata', [function () {
        return {
            replace: 'true',
            templateUrl: 'src/components/metadata/metadata.tpl.html',
            link: function ($scope, $elem, $attrs) {

                $scope.getDifficulty = function(value) {
                    var difficulty;

                    if (value <= 5) {
                        difficulty = 'Easy';
                    }
                    else if (value > 5 && value <= 10) {
                        difficulty = 'Medium';
                    }
                    else {
                        difficulty = 'Hard';
                    }
                    return difficulty;
                };
            }
        };

    }]);
