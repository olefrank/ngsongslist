///////////////////////
// Config

const gulp = require('gulp'),
    plugins = require("gulp-load-plugins")({
        rename: {'gulp-live-server': 'serve'},
        pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
        replaceString: /\bgulp[\-.]/
    }),
    KarmaServer = require('karma').Server;


///////////////////////
// 'Above the fold'

// Build files
gulp.task('build', ['build-lib-js', 'build-js', 'build-css']);

// Start Watching: Run "gulp"
gulp.task('default', ['build', 'watch']);

// Run "gulp server"
gulp.task('server', ['build', 'serve', 'watch']);


///////////////////////
// Tasks

// Minify 3rd party libs
gulp.task('build-lib-js', function () {
    gulp.src(plugins.mainBowerFiles('**/*.js', {debugging: true}))
        .pipe(plugins.uglify({
            output: {
                'ascii_only': true
            }
        }))
        .pipe(plugins.concat('libs.min.js'))
        .pipe(gulp.dest('app/build'));
});

// Minify scripts (exclude tests)
gulp.task('build-js', function () {
    return gulp.src(['app/src/**/*.js', '!app/src/**/*_test.js'])
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'))
        .pipe(plugins.uglify({
            output: {
                'ascii_only': true
            }
        }))
        .pipe(plugins.concat('scripts.min.js'))
        .pipe(gulp.dest('app/build'));
});

// Less
gulp.task('build-css', function () {
    return gulp.src(['app/src/app.less'])
        .pipe(plugins.plumber())
        .pipe(plugins.less())
        .on('error', function (err) {
            plugins.util.log(err);
            this.emit('end');
        })
        .pipe(plugins.autoprefixer({
            browsers: [
                '> 1%',
                'last 2 versions',
                'firefox >= 4',
                'safari 7',
                'safari 8',
                'IE 8',
                'IE 9',
                'IE 10',
                'IE 11'
            ],
            cascade: false
        }))
        .pipe(plugins.cssmin())
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(gulp.dest('app/build')).on('error', plugins.util.log);
});

// 'Watch' task
gulp.task('watch', function () {
    // gulp.watch('app/js/libs/**/*.js', ['squish-jquery']); // todo
    gulp.watch('app/bower_components/**/*.js', ['build-lib-js']); // todo
    gulp.watch('app/src/**/*.js', ['build-js']);
    gulp.watch('app/src/**/*.less', ['build-css']);
});

// Folder "/" serving at http://localhost:8080
// Should use Livereload (http://livereload.com/extensions/)
gulp.task('serve', function () {
    var server = plugins.serve.static('/app', 8080);
    server.start();
    gulp.watch(['app/build/*'], function (file) {
        server.notify.apply(server, [file]);
    });
});

gulp.task('test', function (done) {
    new KarmaServer({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});