'use strict';

angular.module('songapp.songs.service', [])

    .factory('SongsService', ['$http', function ($http) {

        var root = 'http://localhost:5005/songs';

        return {

            getAllSongs: function() {
                return $http.get(root);
            },

            putMetadata: function(id, metadata) {
                var url = root + '/' + id + '/meta';
                return $http.put(url, metadata).then(function() {
                    return id;
                });
            },

            getMetadata: function(id) {
                var url = root + '/' + id + '/meta';
                return $http.get(url, {});
            }

        };

    }]);
