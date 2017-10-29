var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');

gulp.task('default', ['sass'], function () {
    browserSync({
        server: {
            baseDir: './www',
            notify: false,
            startPath: "./www/index.html"
        }
    })

    gulp.watch(['./www/**']
        , function () { runSequence('sass', 'bs-reload') });
});

// sass
gulp.task('sass', function () {
    return gulp.src('./www/scss/**/*.scss')
        .pipe(plugins.sass())
        .pipe(gulp.dest('./www/css'))
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});
