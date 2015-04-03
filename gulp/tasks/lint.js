var gulp = require('gulp');
var jshint = require('gulp-jshint');
var debug = require('gulp-debug');
var config = require('../config');


gulp.task('lint', function () {
    return gulp.src(config.paths.js)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});