'use strict';

angular.module('songapp.difficulty.filter', [])

    .filter('difficulty', function() {

    return function (list, difficulties) {

        var filtered = [];
        var diff;

        list.forEach(function(song) {
            diff = parseFloat(song.difficulty);

            if (diff <= 5 && difficulties.indexOf('easy') > -1) {
                filtered.push(song);
            }
            else if (diff <= 10 && difficulties.indexOf('medium') > -1) {
                filtered.push(song);
            }
            else if (diff > 10 && difficulties.indexOf('hard') > -1) {
                filtered.push(song);
            }
        });

        return filtered;
    };

});
