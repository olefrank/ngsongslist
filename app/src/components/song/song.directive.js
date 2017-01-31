'use strict';

angular.module('songapp.song.song-directive', [])

.directive('song', ['SongsService', function(SongsService) {
  return {
    replace: 'true',
    templateUrl: 'src/components/song/song.tpl.html',
    link: function($scope, $elem, $attrs) {

        $scope.putMeta = function(id) {
            // metadata to send
            var metadata = {
                "meta": {
                    "clicked": true
                }
            };

            SongsService.putMetadata(id, metadata)
                .then(SongsService.getMetadata)
                .then(function(meta) {
                    $scope.song.clicked = true;
                });
        };

    }

  };

}]);
