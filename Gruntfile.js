module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      dist: {
        files: {
          'dist/js/bootstrap.min.js': ['js/bootstrap.js'],
          'dist/js/jquery.backstretch.min.js': ['js/jquery.backstretch.js']
        }
      }
    },
    cssmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css/',
          ext: '.min.css'
        }]
      }
    },
    wiredep: {
      task: {
        src: [
          './*.html'
        ]
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('default', ['uglify', 'cssmin']);

};
