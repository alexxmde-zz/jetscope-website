module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    /* Concat files to compile and then minify them latter on */
    'concat' : {
      'jsx' : {
        src: ['src/jsx/**/*.jsx'],
        dest: 'temp/jsx/scripts.jsx'
      },
      
      'css' : {
        src: ['src/vendor/**/*.css', 'src/css/**/*.css'],
        dest: 'temp/css/styles.css'
      }
    },

    /* Compile files */
    'babel': {
      'options': {
        'sourceMap': true
      },
      'react': {
        'files': {
          "dev/js/react/scripts.jsx" : "temp/jsx/scripts.jsx"
        }
      }
    },

    pkg: grunt.file.readJSON('package.json'),

    /* Minify JS */
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'temp/jsx/scripts.jsx',
        dest: 'build/js/scripts.min.jsx'
      }
    },
    /* Minify CSS */
    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        shortHandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'build/css/styles.min.css' : ['temp/css/**/*.css']
        }
      }
    },

    copy: {
      images:{
        expand: true,
        cwd: 'src',
        src: 'img/**/*',
        dest: 'dev/'
      },
      vendor: {
        expand: true,
        src: 'bower_components/**/*.min.*',
        dest: 'dev/vendor/'

      },
      css: {
        expand: true,
        flatten: true,
        src: 'src/css/**/*.css',
        dest: 'dev/css/'
      },

      html: {
        flatten: true,
        expand: true,
        src: 'src/index.html',
        dest: 'dev/'
      }
    },

    watch: {
      dev: {
        files: 'src/**/*',
        tasks: ['concat','babel', 'cssmin','copy'],
        options: {
          livereload: true
        }
      }
    }

    /* Copy files */

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['concat', 'babel','cssmin','copy']) ;

};
