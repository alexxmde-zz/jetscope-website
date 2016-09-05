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
      'dist': {
        'files': {
          "temp/jsx/scripts.jsx" : "temp/jsx/scripts.jsx"
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
      main:{
        expand: true,
        src: 'resources/*',
        dest: 'build/'
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
  // Default task(s).
  grunt.registerTask('default', ['concat', 'babel','uglify','cssmin','copy']);

};
