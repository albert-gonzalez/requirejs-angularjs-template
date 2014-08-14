//Gruntfile
module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        requirejs: {
            compileApp: {
                options: {
                    baseUrl: ".",
                    mainConfigFile: 'app/js/main.js',
                    name: "app/js/ng-bootstrap",
                    out: "app/dist/app.js",
                    optimize: "uglify2"
                }
            }
        },
        watch: {
            requirejs: {
                files: ['app/js/**/*.js'],
                tasks: ['requirejs'],
                options: {
                    livereload: true
                }
            }
        },

        protractor: {
            options: {
                configFile: "protractor.conf.js",
                keepAlive: true,
                noColor: false,
                args: {
                }
            },
            app: {
                options: {
                    args: {
                        specs: ['test/app/*.spec.js']
                    }
                }
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['requirejs']);
};
