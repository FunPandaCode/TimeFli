var gulp = require('gulp');
var flatten = require('gulp-flatten');
var ngHtml2Js = require('gulp-ng-html2js');
var rename = require('gulp-rename');
var minifyHtml = require('gulp-minify-html');
var config = require('../config');


gulp.task('tplCache', function () {
    return gulp.src(config.paths.tpl)
        // flatten all the templates so they will be in one module
        .pipe(flatten())
        // minify all templates
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        // add templates to angularjs cache under timeFliTemplates module
        .pipe(ngHtml2Js({
            moduleName: 'timeFliTemplates',
            prefix: 'app/'
        }))
        // rename it to our format
        .pipe(rename({
            basename: 'timeFliTemplates.module',
            extname: '.js'
        }))
        // add to destination
        .pipe(gulp.dest(config.environments.build + '/app'));
});