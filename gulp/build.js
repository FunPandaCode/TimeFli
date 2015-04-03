var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('_build', function (callback) {
    runSequence(
        'clean:build',
        'lint',
        ['sass', 'tplCache', 'copy'],
        'htmlInject',
        'size:build',
        ['watch:sass','watch:js'],
        callback
    );
});