'use strict';

describe('songapp.main module', function () {

    beforeEach(module('songapp.main'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('$scope.grade', function() {
        it('sets the strength to "strong" if the password length is >8 chars', function() {
            var $scope = {};
            var songs = { "data": [{"title": "a"}] };
            var controller = $controller('SongsCtrl', { $scope: $scope, songs: songs });

            expect(controller).toBeDefined();

            // $scope.page_title = 'longerthaneightchars';
            //
            // expect($scope.page_title).toEqual('longerthaneightchars');
        });
    });

    // describe('main controller', function () {
    //
    //     it('should ....', inject(function ($controller) {
    //         var SongsCtrl = $controller('SongsCtrl');
    //         expect(SongsCtrl).toBeDefined();
    //     }));
    //
    // });

});

// 'use strict';
//
// describe('songapp.main module', function() {
//
//   beforeEach(module('songapp.main'));
//
//   describe('main controller', function(){
//
//     it('should ....', inject(function($controller) {
//       var SongsCtrl = $controller('SongsCtrl');
//       expect(SongsCtrl).toBeDefined();
//     }));
//
//   });
//
// });