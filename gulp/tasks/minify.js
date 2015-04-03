var gulp = require('gulp');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var config = require('../config.js').minifyCss;


gulp.task('minify:Css', function () {
    return gulp.src(config.environments.build + '/css')
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({
            basename: 'timefli',
            extname: '.min.css'
        }))
        .pipe(gulp.dest(config.environments.dist + '/css'));
});