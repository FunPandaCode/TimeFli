var gulp = require('gulp');
var size = require('gulp-size');
var config = require('../config');


gulp.task('size:build', function () {
    return gulp.src(config.environments.build + '/**/*')
        .pipe(size({
            showFiles: true
        }));
});

gulp.task('size:dist', function () {
    return gulp.src(config.environments.dist + '/**/*')
        .pipe(size({
            showFiles: true
        }));
});