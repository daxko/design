module.exports = function(grunt) {

  grunt.initConfig({

    config: {
      contents: 'contents',
      assets: 'assets'
    },

    sass: {
      options: {
        style: 'compact',
        sourcemap: true
      },
      dist: {
        files: {
          '<%= config.contents %>/css/styleguide.css': '<%= config.assets %>/styleguide.scss'
        }
      }
    },

    cssmin: {
      assets: {
        files: {
          '<%= config.contents %>/css/styleguide.min.css': ['<%= config.contents %>/css/styleguide.css']
        }
      }
    },

    watch: {
      sass: {
        files: ['<%= config.assets %>/{,*/}*.{scss,sass}'],
        tasks: ['sass', 'cssmin']
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
  grunt.registerTask('assets', ['sass', 'cssmin']);
  grunt.registerTask('build', ['assets', 'shell:wintersmith']);
  grunt.registerTask('preview', ['assets', 'shell:wintersmith-preview']);

};