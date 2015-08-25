
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
                files: { 'static/css/platform.css': [ 'src/less/platform.less' ] }  
            }
        },

        autoprefixer: {
            platform: {
                src: "static/css/platform.css"
            }
        }

    });

    
    grunt.registerTask('default', [
        'less',             //compile less
        'autoprefixer'      //apply x-browser prefixes
    ]);

};
