module.exports = function(grunt) {

	grunt.initConfig({
	  concat: {
	    options: {
	      separator: ';',
	    },
	    dist: {
	      src: ['js/**/*.js'],
	      dest: 'js/dist/built.js',
	    },
	  }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat']);


};