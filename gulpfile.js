
var pkg         = require('./package.json'),
    gulp        = require('gulp'),
    jshint      = require('gulp-jshint'),
    concat      = require('gulp-concat'),
    babel       = require('gulp-babel'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    notify      = require('gulp-notify')
    srcmaps     = require('gulp-sourcemaps'),
    less        = require('gulp-less'),
    autoprefixer= require('less-plugin-autoprefix'),
    cssmin      = require('gulp-cssmin'),
    livereload  = require('gulp-livereload'),
    util        = require('gulp-util');


const autoprefix = new autoprefixer({
    browsers: [
        "iOS >= 10",
        "Chrome >= 30",
        "Firefox >= 40",
        "Explorer >= 11",
        "last 2 Edge versions"
    ]
});



require('gulp-help')(gulp, { description: 'Help listing.' });


gulp.task('jshint', function () {
    gulp.src(['src/**/*.js'])
        .pipe(jshint({
            // laxbreak: true,
            // laxcomma: true,
            esversion: 6, //JSHint Harmony/ES6
            // eqnull: true,
            browser: true,
            jquery: true
        }))
        .pipe(jshint.reporter('default'))
        .pipe(livereload());
});



gulp.task('js', 'Concat, Uglify JavaScript into a single file', function() {

    //main application
    gulp.src([ 'src/js/**/*.js' ])
        // .pipe(srcmaps.init())
        .pipe(concat('geoplatform.style.js'))
        .pipe(babel({presets: ["es2015"]}))
        .pipe(uglify()).on('error', notify.onError("Error: <%= error.message %>"))
        .pipe(rename({extname: ".min.js"}))
        // .pipe(srcmaps.write('./'))
        .pipe(gulp.dest('dist/js/'))
        .pipe(notify('Compiled JS'));
});

gulp.task('less', 'Compile less into a single file.', function() {

    //Build GP platform style include
    gulp.src([
            'src/less/style.less'
        ], {base: "."})
        .pipe(concat('platform.less'))
        //must write to public before processing for paths to work
        // .pipe(gulp.dest('dist/css/'))
        .pipe(less({
            plugins: [autoprefix],
            paths: ['./src/less']
        }))
        .on("error", notify.onError({message: 'LESS compile error: <%= error.message %>'}))
        .pipe(gulp.dest('dist/css/'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css/'))
        .pipe(notify('Compiled styles'));


    //Build style includes needed by WP Portal Theme
    gulp.src([ 'src/less/portal/style.less' ], {base: "."})
        .pipe(concat('portal.less'))
        //must write to public before processing for paths to work
        // .pipe(gulp.dest('dist/css/'))
        .pipe(less({
            plugins: [autoprefix],
            paths: ['./src/less']
        }))
        .on("error", notify.onError({message: 'LESS compile error: <%= error.message %>'}))
        .pipe(gulp.dest('dist/css/'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css/'))
        .pipe(notify('Compiled styles'));
});

gulp.task('default', ['less', 'js']);
