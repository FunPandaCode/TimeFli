var gulp = require('gulp');
var merge = require('merge-stream')
var config = require('../config.js');

gulp.task('copy', function () {
    var libs = gulp.src(config.paths.libs)
        .pipe(gulp.dest(config.environments.build + '/libs'));

    var source = gulp.src([config.paths.js, config.paths.views, '!' + config.paths.tpl, '!' + config.paths.test])
        .pipe(gulp.dest(config.environments.build));

    return merge(libs, source);
});