module.exports = function(grunt) {

    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
        require('load-grunt-tasks')(grunt);

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        shell: {
          jekyllServe: {
            command: "jekyll serve --baseurl="
          },
          jekyllBuild: {
            command: "jekyll build --config _config-dev.yml"
          }
        },
        uglify: {
          global: {
            files: {
              "js/scripts.min.js": ["js/scripts.js"],
              "js/vendor.min.js": ["js/vendor/*.js"]
            }
          }
        },
        sass: {
          global: {
            options: {
              style: "compressed"
            },
            files: {
              "css/main-unprefixed.css": "scss/main.scss"
            }
          }
        },
        autoprefixer: {
           dist: {
               files: {
                   'css/main.css': 'css/main-unprefixed.css'
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
           livereload: true
         },
         site: {
           files: ["index.html", "_layouts/*.html", "_posts/*.md", "_projects/*.md", "_includes/*.html"],
           tasks: ["shell:jekyllBuild"]
         },
         js: {
           files: ["js/*.js"],
           tasks: ["uglify", "shell:jekyllBuild"]
         },
         css: {
           files: ["scss/*.scss"],
           tasks: ["sass", "autoprefixer", "criticalcss", "shell:jekyllBuild"]
         }
       },
       concurrent: {
           dev: ['shell:jekyllServe', 'watch'],
           options: {
               logConcurrentOutput: true
           }
       }
    });


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask("serve", ["shell:jekyllServe"]);
    grunt.registerTask("default", ["sass", "autoprefixer", "criticalcss",  "concurrent:dev"]);
};