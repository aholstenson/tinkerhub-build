'use strict';

module.exports = function() {
    const gulp = require('gulp');
    const notify = require('gulp-notify');
    const plumber = require('gulp-plumber');

    const eslint = require('gulp-eslint');

    const src = 'lib/**/*.js';

    gulp.task('build', function() {
        return gulp.src(src)
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
    });

    gulp.task('build:dev', function() {
        return gulp.src(src)
            .pipe(plumber(({
                errorHandler: notify.onError('<%= error.message %>')
            })))

            .pipe(eslint())
            .pipe(eslint.format());
    });

    gulp.task('dev', [ 'build:dev' ], function() {
        gulp.watch(src, [ 'build:dev' ]);
    });
};
