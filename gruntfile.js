module.exports = function(grunt) {

  grunt.initConfig({

    config: {
      contents: 'contents/',
      assets: 'assets/'
    },

    sass: {
      options: {
        style: 'compact',
        sourcemap: true
      },
      compile: {
        files: {
          '<%= config.contents %>css/global.css': '<%= config.assets %>global.scss'
        }
      }
    },

    less: {
      bootstrap: {
        files: {
          '<%= config.contents %>css/bootstrap.css': ['<%= config.assets %>bootstrap/bootstrap.less']
        }
      }
    },

    cssmin: {
      assets: {
        files: {
          '<%= config.contents %>/css/global.css': ['<%= config.contents %>/css/bootstrap.css', '<%= config.contents %>/css/global.css']
        }
      }
    },

    watch: {
      sass: {
        files: ['<%= config.assets %>/**/*.{scss,sass}'],
        tasks: ['sass', 'cssmin']
      },
      less: {
        files: ['<%= config.assets %>bootstrap/*.less'],
        tasks: ['less', 'cssmin']
      }
    },

    shell: {
      wintersmith: {
        command: 'node node_modules/wintersmith/bin/wintersmith build'
      },
      'wintersmith-preview': {
        command: 'node node_modules/wintersmith/bin/wintersmith preview'
      }
    }

  });

  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['assets']);
  grunt.registerTask('assets', ['sass', 'less', 'cssmin']);
  grunt.registerTask('build', ['assets', 'shell:wintersmith']);
  grunt.registerTask('preview', ['assets', 'shell:wintersmith-preview']);

};