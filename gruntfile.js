module.exports = function(grunt) {

  require('time-grunt')(grunt);

  grunt.initConfig({

    config: {
      docs: 'docs',
      contents: '<%= config.docs %>/contents',
      css: 'css',
      scss: 'scss'
    },

    sass: {
      options: {
        style: 'compact',
        sourcemap: true
      },
      dist: {
        files: {
          '<%= config.css %>/global.css': '<%= config.scss %>/global.scss'
        }
      },
      docs: {
        files: {
          '<%= config.contents %>/css/styleguide.css': '<%= config.docs %>/scss/styleguide.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 3 versions', 'ie >= 9'],
        map: true
      },
      dist: {
        src: '<%= config.css %>/*.css'
      },
      docs: {
        src: '<%= config.contents %>/css/*.css'
      }
    },

    cssmin: {
      dist: {
        files: {
          '<%= config.css %>/global.min.css': ['<%= config.css %>/global.css']
        }
      },
      docs: {
        files: {
          '<%= config.contents %>/css/styleguide.min.css': ['<%= config.contents %>/css/styleguide.css']
        }
      }
    },

    watch: {
      sass: {
        files: ['<%= config.scss %>/{,*/}*.{scss,sass}', '<%= config.docs %>/scss/{,*/}*.{scss,sass}'],
        tasks: ['sass', 'cssmin']
      },
      docs: {
        files: ['<%= config.contents %>/{,*/}*'],
        tasks: ['shell:metalsmith']
      }
    },

    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      docs: {
        tasks: ['watch', 'shell:metalsmith-preview']
      }
    },

    shell: {
      metalsmith: {
        command: 'cd docs && node index.js'
      },
      'metalsmith-preview': {
        command: 'node node_modules/.bin/http-server docs/build'
      }
    }

  });

  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['assets']);
  grunt.registerTask('assets', ['sass', 'autoprefixer', 'cssmin']);
  grunt.registerTask('build', ['assets', 'shell:metalsmith']);
  grunt.registerTask('preview', ['assets', 'concurrent:docs']);

};