var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function (callback) {
    runSequence('_build', callback);
});