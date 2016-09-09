'use strict';

module.exports = function(grunt) {

  require('time-grunt')(grunt);

  grunt.initConfig({

    config: {
      docs: 'docs',
      contents: '<%= config.docs %>/contents',
      css: 'css',
      js: 'js',
      scss: 'scss',
      fonts: 'fonts'
    },

    sass: {
      options: {
        outputStyle: 'expanded',
        sourceMap: true
      },
      dist: {
        files: {
          '<%= config.css %>/global.css': '<%= config.scss %>/global.scss',
          '<%= config.css %>/mx.css': '<%= config.scss %>/mx.scss'
        }
      },
      themes: {
        files: [{
          expand: true,
          cwd: '<%= config.scss %>/mx-themes',
          dest: '<%= config.css %>/themes',
          src: 'theme-*.scss',
          ext: '.css'
        }]
      },
      templates: {
        files: [{
          expand: true,
          cwd: '<%= config.scss %>/client-templates',
          dest: '<%= config.css %>/client-templates',
          src: '*.scss',
          ext: '.css'
        }]
      },
      docs: {
        files: {
          '<%= config.contents %>/css/styleguide.css': '<%= config.docs %>/scss/styleguide.scss',
          '<%= config.contents %>/css/mx-styleguide.css': '<%= config.docs %>/scss/mx-styleguide.scss'
        }
      }
    },

    mocha: {
      options: {
        run: true,
        reporter: 'Spec'
      },
      test: {
        src: ['js/tests/*.html']
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer-core')({ browsers: ['last 3 versions', 'ie >= 9'] })
        ]
      },
      dist: {
        src: '<%= config.css %>/*.css'
      },
      docs: {
        src: '<%= config.contents %>/css/*.css'
      }
    },

    copy: {
      js: {
        files: [{
          expand: true,
          src: ['*.js'],
          cwd: '<%= config.js %>/',
          dest: '<%= config.contents %>/js',
          filter: 'isFile'
        }]
      },
      normalize: {
        files: {
          // Because sass can't include normal css files
          '<%= config.scss %>/_normalize.scss': ['node_modules/normalize.css/normalize.css'],
        }
      },
      themes: {
        files: [
          {
            expand: true,
            cwd: '<%= config.css %>/themes',
            src: ['*.css', '!*.min.css'],
            dest: '<%= config.docs %>/contents/css/themes/',
            filter: 'isFile'
          }
        ]
      },
      templates: {
        files: [
          {
            expand: true,
            cwd: '<%= config.css %>/client-templates',
            src: ['*.css', '!*.min.css'],
            dest: '<%= config.docs %>/contents/css/client-templates/',
            filter: 'isFile'
          }
        ]
      },
      icons: {
        files: [
          {
            expand: true,
            cwd: '<%= config.fonts %>',
            src: ['*.*'],
            dest: '<%= config.docs %>/contents/css/fonts/',
            filter: 'isFile'
          }
        ]
      },
      mxicons: {
        src: 'node_modules/mx-icons/dist/icons.svg',
        dest: '<%= config.docs %>/contents/images/icons.svg'
      }
    },

    cssmin: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          '<%= config.css %>/global.min.css': ['<%= config.css %>/global.css'],
          '<%= config.css %>/mx.min.css': ['<%= config.css %>/mx.css']
        }
      },
      themes: {
        options: {
          keepBreaks: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.css %>/themes/',
          dest: '<%= config.css %>/themes/',
          ext: '.min.css',
          src: ['*.css', '!*.min.css']
        }]
      },
      templates: {
        options: {
          keepBreaks: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.css %>/client-templates/',
          dest: '<%= config.css %>/client-templates/',
          ext: '.min.css',
          src: ['*.css', '!*.min.css']
        }]
      },
      docs: {
        files: {
          '<%= config.contents %>/css/styleguide.min.css': ['<%= config.contents %>/css/styleguide.css'],
          '<%= config.contents %>/css/mx-styleguide.min.css': ['<%= config.contents %>/css/mx-styleguide.css']
        }
      }
    },

    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= config.docs %>',
            src: ['**/*.html'],
            dest: '<%= config.docs %>'
          }
        ]
      }
    },

    jshint: {
      options: {
        jshintrc: true
      },
      files: [
        'gruntfile.js',
        '<%= config.js %>/*.js',
        '<%= config.docs %>/index.js',
      ]
    },

    watch: {
      sass: {
        files: ['<%= config.scss %>/{,*/}*.{scss,sass}', '<%= config.docs %>/scss/{,*/}*.{scss,sass}'],
        tasks: ['sass', 'postcss', 'cssmin']
      },
      js: {
        files: ['<%= config.js %>/*.js'],
        tasks: ['copy:js']
      },
      docs: {
        files: ['<%= config.contents %>/{,*/}*', '<%= config.docs %>/templates/{,*/}*.{hbs,js}'],
        tasks: ['shell:metalsmith']
      }
    },

    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      docs: {
        tasks: ['watch', 'shell:preview']
      }
    },

    shell: {
      metalsmith: {
        command: 'cd docs && node index.js'
      },
      'preview': {
        command: 'node node_modules/.bin/http-server docs/build -p 3000'
      }
    }

  });

  // Generate Parker Stats for CSS
  grunt.registerTask('parker', function() {
    var Parker = require('parker/lib/Parker')
      , metrics = require('parker/metrics/All')
      , dir = grunt.config.data.config.css;

    ['/global.min.css', '/mx.min.css'].forEach(cssFile => {
      var file = grunt.file.read(dir + cssFile);
      var pkg = grunt.file.readJSON(process.cwd() + '/package.json');
      var stats = new Parker(metrics).run(file);
      var out = [];

      out.push('## Design');
      out.push('`v' + pkg.version + '` - *generated on ' + grunt.template.today('mmm dd yyyy') + '*');
      out.push('### Stats');

      out.push('#### ' + dir + cssFile);
      out.push('|Stat|Metric|');
      out.push('|---|---|');

      metrics.forEach(function(m) {
        if(stats[m.id]) {
          var stat = stats[m.id];

          if(Array.isArray(stat)) {
            stat = stat.join('<br/>');
          }

          out.push('|' + m.name + '|' + stat + '|');
        }
      });

      grunt.file.write(dir + '/.' + cssFile.match(/([a-z]+)\.min\.css/i)[1] + '-stats.md', out.join('\n'));
    });
  });

  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['assets']);
  grunt.registerTask('test', ['jshint', 'mocha']);
  grunt.registerTask('assets', ['copy', 'sass', 'postcss', 'cssmin', 'parker']);
  grunt.registerTask('build', ['assets', 'jshint', 'mocha', 'shell:metalsmith', 'htmlmin']);
  grunt.registerTask('preview', ['assets', 'copy', 'shell:metalsmith', 'concurrent:docs']);

};
