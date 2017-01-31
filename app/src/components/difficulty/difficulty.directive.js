'use strict';

angular.module('songapp.difficulty.directive', [])

    .directive('difficulty', [function () {
        return {
            replace: 'true',
            templateUrl: 'src/components/difficulty/difficulty.tpl.html',
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
