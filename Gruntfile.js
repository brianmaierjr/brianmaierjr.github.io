module.exports = function(grunt) {

    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
        require('load-grunt-tasks')(grunt);

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        shell: {
            jekyllServe: {
                command: 'jekyll serve -w'
            }
        },
        autoprefixer: {
           dist: {
               files: {
                   'build/style.css': 'style.css'
               }
           }
       },
       criticalcss: {
           custom: {
               options: {
                   url: "127.0.0.1:4000/portfolio-new/",
                   width: 1200,
                   height: 900,
                   outputfile: "_includes/critical.css",
                   filename: "_site/css/main.css", // Using path.resolve( path.join( ... ) ) is a good idea here
                   buffer: 800*1024,
                   ignoreConsole: false
               }
           }
       },
        watch: {
            options: {
                // Start a live reload server on the default port 35729
                livereload: true,
            },
           styles: {
               files: ['style.css'],
               tasks: ['autoprefixer']
           }
        }

    });


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['criticalcss', 'shell']);

};