var gulp = require('gulp');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var config = require('../config');

gulp.task('watch', function() {
    gulp.watch(config.paths.sass,  ['sass']);
    gulp.watch([config.paths.js, '!' + config.paths.test],    ['lint', 'copy:watch']);
    gulp.watch(config.paths.tpl, ['tplCache']);
});