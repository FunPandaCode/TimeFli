var gulp = require('gulp');
var inject = require('gulp-inject');
var config = require('../config');

gulp.task('htmlInject', function () {
    return gulp.src(config.environments.build + '/index.html')
        .pipe(inject(gulp.src(config.environments.build + '/**/*.css', {read: false}), {name: 'timeFliCss'}))
        .pipe(inject(gulp.src(config.paths.libs, {read: false}), {name: 'libs'}))
        .pipe(inject(gulp.src(config.environments.build + '/app/app.js', {read: false}), {name: 'app'}))
        .pipe(inject(gulp.src(config.environments.build + '/**/*.module.js', {read: false}), {name: 'modules'}))
        .pipe(inject(gulp.src(config.environments.build + '/**/*.directive.js', {read: false}), {name: 'directives'}))
        .pipe(inject(gulp.src(config.environments.build + '/**/*.controller.js', {read: false}), {name: 'controllers'}))
        .pipe(gulp.dest(config.environments.build));
});