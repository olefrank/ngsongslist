'use strict';

angular.module('songapp.main', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/main', {
            templateUrl: 'src/main/main.html',
            resolve: {
                songs: ['SongsService', function(SongsService) {
                    return SongsService.getAllSongs();
                }]
            },
            controller: 'SongsCtrl'
        });

    }])

    .controller('SongsCtrl', ['$scope', 'songs', function ($scope, songs) {
        $scope.page_title = "List of Songs";

        $scope.songs = songs ? JSON.parse(songs.data) : [];
        $scope.groupby_artist = false;

        $scope.filter_easy = false;
        $scope.filter_medium = false;
        $scope.filter_hard = false;


        // filter function on difficulties
        $scope.difficulty = function(song) {
            return song.difficulty <= 5 && !$scope.filter_easy ||
            song.difficulty > 5 && song.difficulty <=10 && !$scope.filter_medium ||
            song.difficulty > 10 && !$scope.filter_hard;
        };


        // calculate total length of titles
        var sum = $scope.songs.reduce(function(a,b) {
            return a + b.title.length;
        }, 0);
        var msg = "Total length of titles: " + sum + " chars\n";
        msg += "let sum = songs.reduce(function(a,b) { return a + b.title.length; }, 0); !!!";
        console.log(msg);
        alert(msg);
    }]);