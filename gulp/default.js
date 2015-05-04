var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('watch', function (callback) {
    runSequence('_watch', callback);
});

gulp.task('default', function (callback) {
    runSequence('build', callback);
});