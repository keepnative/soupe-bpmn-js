'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  // project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    config: {
      sources: 'lib',
      dist: 'dist'
    },

    jshint: {
      src: [
        ['<%=config.sources %>']
      ],
      options: {
        jshintrc: true
      }
    },

    bundle: {
      modeler: {
        name: 'bpmn-modeler',
        src: '<%= config.sources %>/Modeler.js',
        dest: '<%= config.dist %>'
      },
      viewer: {
        name: 'bpmn-viewer',
        src: '<%= config.sources %>/Viewer.js',
        dest: '<%= config.dist %>'
      }
    },

    copy: {
      bpmn_js: {
        files: [
          {expand: true, cwd: 'node_modules/bpmn-js/assets', src: ['**'], dest: '<%= config.dist %>/assets'}
        ]
      },

      diagram_js: {
        files: [
          {expand: true, cwd: 'node_modules/diagram-js/assets', src: ['**'], dest: '<%= config.dist %>/assets'}
        ]
      }
    },

    less: {
      options: {
        dumpLineNumbers: 'comments',
        paths: [
          'node_modules'
        ]
      },

      styles: {
        files: {
          '<%= config.dist %>/assets/bpmn-js-properties-panel.css': 'assets/bpmn-js-properties-panel.less'
        }
      }
    },

    watch: {
      less: {
        files: [
          'assets/**/*.less',
          'node_modules/bpmn-js-properties-panel/styles/**/*.less'
        ],
        tasks: [
          'less'
        ]
      }
    }

  });

  grunt.loadTasks('tasks');

  grunt.registerTask('build', ['bundle', 'copy', 'less']);

  grunt.registerTask('default', ['jshint', 'build']);
};
