var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (callback) {
    runSequence(
        'clean:build',
        'lint',
        ['sass', 'tplCache', 'copy:libs', 'copy:fonts', 'copy:source'],
        'htmlInject',
        'size:build',
        callback
    );
});