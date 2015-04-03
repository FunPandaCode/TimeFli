var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var config = require('../config.js');


gulp.task('sass', function () {
    return gulp.src(config.paths.sass)
        .pipe(sass())
        .pipe(rename({
            basename: 'timeFli',
            extname: '.css'
        }))
        .pipe(gulp.dest(config.environments.build + '/css'));
});
