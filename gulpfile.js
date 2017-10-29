var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');

gulp.task('default', ['sass'], function () {
    browserSync({
        server: {
            baseDir: './docs',
            notify: false,
            startPath: "./docs/index.html"
        }
    })

    gulp.watch(['./docs/**']
        , function () { runSequence('sass', 'bs-reload') });
});

// sass
gulp.task('sass', function () {
    return gulp.src('./docs/scss/**/*.scss')
        .pipe(plugins.sass())
        .pipe(gulp.dest('./docs/css'))
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});
