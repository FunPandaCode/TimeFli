var gulp = require('gulp');
var inject = require('gulp-inject');
var config = require('../config');

gulp.task('htmlInject', function () {
    return gulp.src(config.environments.build + '/index.html')
        .pipe(inject(gulp.src(config.environments.build + '/**/*.css', {read: false}), {name: 'timeFliCss', relative: true}))
        .pipe(inject(gulp.src(config.environments.build + '/libs/*.js', {read: false}), {name: 'libs', relative: true}))
        .pipe(inject(gulp.src(config.environments.build + '/app/app.js', {read: false}), {name: 'app', relative: true}))
        .pipe(inject(gulp.src(config.environments.build + '/**/*.module.js', {read: false}), {name: 'modules', relative: true}))
        .pipe(inject(gulp.src(config.environments.build + '/**/*.service.js', {read: false}), {name: 'services', relative: true}))
        .pipe(inject(gulp.src(config.environments.build + '/**/*.directive.js', {read: false}), {name: 'directives', relative: true}))
        .pipe(inject(gulp.src(config.environments.build + '/**/*.controller.js', {read: false}), {name: 'controllers', relative: true}))
        .pipe(gulp.dest(config.environments.build));
});