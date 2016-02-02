module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass_directory_import: {
            your_target: {
                files: {
                    src: ['css/sass/parts/_all.scss']
                },
            },
        },

        sass: {
            dist: {
                options: {
                    loadPath: require('node-bourbon').includePaths,
                    sourceMap: true
                },
                files: {
                    'css/style.css' : 'css/sass/style.scss',
                    'css/style-ie.css' : 'css/sass/style-ie.scss'
                }
            },
        },

        concat: {
            app: {
                files: {
                    'js/concat/app.js': [
                        'js/functions/*.js',
    					'js/app.js'
    				]
                },
            }
        },

        imagemin: {
            jpg: {
    			options: {
    				progressive: true
    			},
    			files: [{
    				expand: true,
    				cwd: 'img/src',
    				src: ['**/*.jpg'],
    				dest: 'img/min',
    				ext: '.jpg'
    			}]
    		},
            png: {
    			options: {
    				optimizationLevel: 5
    			},
    			files: [{
    				expand: true,
    				cwd: 'img/src',
    				src: ['**/*.png'],
    				dest: 'img/min',
    				ext: '.png'
    			}]
    		}
        },

        watch: {
            sass: {
                files: 'css/sass/**/*.scss',
                tasks: ['sass_directory_import','sass']
            },
            js: {
    			files: [
                    'js/app.js',
                    'js/functions/*.js'
                ],
                tasks: ['concat']
    		},
            imagemin: {
                files: [
                    'img/src/**/*.jpg',
                    'img/src/**/*.png'
                ],
                tasks: ['imagemin']
            },
            livereload: {
                options: {
                    livereload: 35740
                },
                files: ['*.html', 'js/**/*.js', 'css/sas/**/*.scss','img/**/*.{png,jpg,jpeg,gif,webp,svg}']
            },
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass-directory-import');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default',['watch']);
    grunt.registerTask('build',['sass', 'concat', 'imagemin']);

};
