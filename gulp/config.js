module.exports = {
    environments: {
        build: 'build',
        dist: 'www'
    },

    paths: {
        libs: {
            js: [
                'libs/ionic/js/ionic.bundle.js'
            ],
            fonts: [
                'libs/ionic/fonts/*.*'
            ]
        },
        sass: 'src/scss/ionic.app.scss',
        js: 'src/**/*.js',
        views: 'src/**/*.html',
        tpl: 'src/**/*.tpl.html',
        test: 'src/**/*.spec.js'
    }
}
