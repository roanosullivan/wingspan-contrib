/*global module:false*/
module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

        bower: {
            install: {
                options: {
                    copy: false,
                    install: true,
                    verbose: false,
                    cleanTargetDir: false,
                    cleanBowerDir: false,
                    bowerOptions: {}
                }
            }
        },

        requirejs: {
            options: {

                optimize: 'none',
                inlineText: true,
                useStrict: true,
                skipPragmas: true,
                preserveLicenseComments: true,

                wrap: {
                    "startFile": "almond-begin.txt",
                    "endFile": "almond-end.txt"
                },


                baseUrl: 'js',

                paths: {
                    underscore: '../bower_components/underscore/underscore',
                    'underscore.string': '../bower_components/underscore.string/lib/underscore.string',
                    jquery: '../bower_components/jquery/jquery',
                    moment: '../bower_components/momentjs/moment',
                    q: '../bower_components/q/q',
                    almond: '../bower_components/almond/almond'
                },

                shim: {
                    'underscore': { deps: [], exports: '_' },
                    'underscore.string': { deps: [], exports: ['_s'] },
                    'jquery': { deps: [], exports: '$' },
                    'moment': { deps: [], exports: 'moment' }
                },

                uglify: {
                    toplevel: true,
                    ascii_only: true,
                    beautify: true,
                    max_line_length: 1000,
                    defines: { DEBUG: ['name', 'false'] },
                    no_mangle: true
                }
            },
            compile: {
                options: {
                    out: 'dist/wingspan-contrib.js',
                    include: ['almond', 'wingspan-contrib'],
                    exclude: ['q', 'jquery', 'underscore', 'require', 'underscore.string', 'moment']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-bower-task');

    grunt.registerTask('default', ['bower:install', 'requirejs:compile']);
    grunt.registerTask('devel', ['bower:install']);
};