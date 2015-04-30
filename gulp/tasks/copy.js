var gulp = require('gulp');
var debug = require('gulp-debug');
var config = require('../config.js');

gulp.task('copy:libs', function () {
    return gulp.src(config.paths.libs.js)
        .pipe(gulp.dest(config.environments.build + '/libs'));
});

gulp.task('copy:fonts', function () {
    return gulp.src(config.paths.libs.fonts)
        .pipe(gulp.dest(config.environments.build + '/fonts'));
});

gulp.task('copy:source', function () {
    return gulp.src([config.paths.js, config.paths.views, '!' + config.paths.tpl, '!' + config.paths.test])
        .pipe(gulp.dest(config.environments.build));
});

gulp.task('copy:watch', function () {
    return gulp.src([config.paths.js, config.paths.views, '!' + config.paths.tpl, '!' + config.paths.test, '!src/index.html'])
        .pipe(gulp.dest(config.environments.build));
});