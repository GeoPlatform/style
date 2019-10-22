
const   { src, dest, pipe, watch, task, series } = require('gulp');

var pkg         = require('./package.json'),
    jshint      = require('gulp-jshint'),
    concat      = require('gulp-concat'),
    babel       = require('gulp-babel'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    srcmaps     = require('gulp-sourcemaps'),
    less        = require('gulp-less'),
    autoprefixer= require('less-plugin-autoprefix'),
    cleanCSS    = require('gulp-clean-css'),
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



function jshintTask() {
    return src( ['src/**/*.js'] )
    .pipe(
        jshint({
            // laxbreak: true,
            // laxcomma: true,
            esversion: 6, //JSHint Harmony/ES6
            // eqnull: true,
            browser: true,
            jquery: true
        })
    )
    .pipe( jshint.reporter('default') )
    .pipe( livereload() );
}

//Concat, Uglify JavaScript into a single file
function jsSrcTask() {
    return src( [ 'src/js/**/*.js' ] )
    .pipe( concat('geoplatform.style.js') )
    .pipe( babel({presets: ["es2015"]}) )
    .pipe( uglify() )
    .pipe( rename({extname: ".min.js"}) )
    .pipe( dest('dist/js/') );
}

var jsTask = series(jshintTask, jsSrcTask);




//Build platform style sheet
function lessPlatformTask() {
    return src( [ 'src/less/style.less' ], {base: "."} )
    .pipe( concat('platform.less') )
    .pipe( less({ plugins: [autoprefix], paths: ['./src/less'] }) )
    .pipe( dest('dist/css/') )
    .pipe( cleanCSS() )
    .pipe( rename({ suffix: '.min' }) )
    .pipe( dest('dist/css/') );
}

//Build style includes needed by WP Portal Theme
function lessPortalTask() {
    return src( [ 'src/less/portal/style.less' ], {base: "."} )
    .pipe( concat('portal.less') )
    .pipe( less({ plugins: [autoprefix], paths: ['./src/less'] }) )
    .pipe( dest('dist/css/') )
    .pipe( cleanCSS() )
    .pipe( rename({ suffix: '.min' }) )
    .pipe( dest('dist/css/') );
}

var lessTask = series(lessPlatformTask, lessPortalTask);



exports.js = jsTask;
exports.less = lessTask;
exports.default = series(lessTask, jsTask);
