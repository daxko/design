module.exports = function(grunt) {

  require('time-grunt')(grunt);

  grunt.initConfig({

    config: {
      docs: 'docs',
      contents: '<%= config.docs %>/contents',
      css: 'css',
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

    // Because sass can't include normal css files
    copy: {
      dist: {
        files: {
          '<%= config.scss %>/_normalize.scss': ['node_modules/normalize.css/normalize.css']
        }
      },
      icons: {
        files: [
          {
            expand: true,
            cwd: '<%= config.fonts %>',
            src: ['*.*'],
            dest: '<%= config.docs%>/contents/css/fonts/',
            filter: 'isFile'
          }
        ]
      }
    },

    cssmin: {
      options: {
        sourceMap: true
      },
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
        tasks: ['sass', 'autoprefixer', 'cssmin']
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

    var file = grunt.file.read(dir + '/global.min.css');
    var pkg = grunt.file.readJSON(process.cwd() + '/package.json');
    var stats = new Parker(metrics).run(file);
    var out = [];

    out.push('## Design');
    out.push('`v' + pkg.version + '` - *generated on ' + grunt.template.today('mmm dd yyyy') + '*');
    out.push('### Stats');

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

    grunt.file.write(dir + '/.stats.md', out.join('\n'));
  });

  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['assets']);
  grunt.registerTask('assets', ['copy', 'sass', 'autoprefixer', 'cssmin', 'parker']);
  grunt.registerTask('build', ['assets', 'shell:metalsmith']);
  grunt.registerTask('preview', ['assets', 'shell:metalsmith', 'concurrent:docs']);

};