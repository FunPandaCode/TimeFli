var gulp = require('gulp');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var debug = require('gulp-debug');
var config = require('../config');

gulp.task('watch:sass', function () {
    watch(config.paths.sass, function () {
        gulp.start('sass');
    });
});

gulp.task('watch:js', function () {
    watch([config.paths.js, '!' + config.paths.test], function () {
        runSequence(
            'lint',
            'copy'
        );
    });
});