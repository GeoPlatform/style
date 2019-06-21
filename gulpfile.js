
const   { src, dest, pipe, watch, task, series } = require('gulp');

const pkg         = require('./package.json'),
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



function jshintTask () {
    return src( ['src/**/*.js'] )
    .pipe( jshint({
        // laxbreak: true,
        // laxcomma: true,
        esversion: 6, //JSHint Harmony/ES6
        // eqnull: true,
        browser: true,
        jquery: true
    }) )
    .pipe( jshint.reporter('default') )
    .pipe( livereload() );
}



// Concat, Uglify JavaScript into a single file
function jsTask() {

    //main application
    return src( [ 'src/js/**/*.js' ] )
    // .pipe(srcmaps.init())
    .pipe( concat('geoplatform.style.js') )
    .pipe( babel({presets: ["env"]}) )
    .pipe( uglify()).on( 'error', notify.onError("Error: <%= error.message %>") )
    .pipe( rename({extname: ".min.js"}) )
    // .pipe(srcmaps.write('./') )
    .pipe( dest('dist/js/') )
    .pipe( notify('Compiled JS') );
}

//Compile less into a single file.
function lessTask() {

    //Build GP platform style include
    return src( [ 'src/less/style.less' ], {base: "."} )
    .pipe( concat('platform.less') )
    //must write to public before processing for paths to work
    // .pipe( dest('dist/css/') )
    .pipe( less({ plugins: [autoprefix], paths: ['./src/less']}) )
    .on( "error", notify.onError({message: 'LESS compile error: <%= error.message %>'}) )
    .pipe( dest('dist/css/') )
    .pipe( cssmin() )
    .pipe( rename({ suffix: '.min' }) )
    .pipe( dest('dist/css/') )
    .pipe( notify('Compiled styles') );
}

function portalLessTask() {
    //Build style includes needed by WP Portal Theme
    return src( [ 'src/less/portal/style.less' ], {base: "."} )
    .pipe( concat('portal.less') )
    //must write to public before processing for paths to work
    // .pipe( dest('dist/css/') )
    .pipe( less({ plugins: [autoprefix], paths: ['./src/less'] }) )
    .on("error", notify.onError({message: 'LESS compile error: <%= error.message %>'}))
    .pipe( dest('dist/css/') )
    .pipe( cssmin() )
    .pipe( rename({ suffix: '.min' }) )
    .pipe( dest('dist/css/') )
    .pipe( notify('Compiled styles') );
}


exports.default = series(lessTask, portalLessTask, jshintTask, jsTask);
exports.less = series(lessTask, portalLessTask);
exports.jshint = jshintTask;
exports.jsTask = series(jshintTask, jsTask);
