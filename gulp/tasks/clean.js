var gulp = require('gulp');
var del = require('del');
var config = require('../config');


gulp.task('clean:build', function (callback) {
    del(config.environments.build, callback);
});

gulp.task('clean:dist', function (callback) {
    del(config.environments.dist, callback);
});