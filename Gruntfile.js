
/* 
 http://www.sitepoint.com/writing-awesome-build-script-grunt/
 https://github.com/jlengstorf/hyper-optimized-workflow/blob/master/Gruntfile.js
 */
module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            platform: {
                options: {
                    cleancss: true,
                    strictImports: true
                },
                files: { 'dist/css/platform.css': [ 'src/less/platform.less' ] }  
            }
        },

        autoprefixer: {
            platform: {
                src: "dist/css/platform.css"
            }
        },

        concat: {
            options: {
                separator: grunt.util.linefeed + ';' + grunt.util.linefeed
            },
            js: {
                src: [ 'src/js/*.js'],
                dest: 'dist/js/geoplatform.style.js'
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            js: {
                files: {
                    'dist/js/geoplatform.style.min.js': 'dist/js/geoplatform.style.js',
                }
            }
        }

    });

    
    grunt.registerTask('default', [
        'less',             //compile less
        'autoprefixer',     //apply x-browser prefixes
        'concat:js',
        'uglify:js'
    ]);

};
