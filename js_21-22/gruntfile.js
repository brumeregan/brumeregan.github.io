module.exports = function(grunt) {
// require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		babel: {
			options: {
				sourceMap: false,
				presets: ['es2015']
			},
			dist: {
				files: [{
					expand: true,
          cwd: 'js/src',
          src: '*.js',
          dest: 'js/dist',
          ext: '.js',
          extDot: 'first'
        }]
			}
		},
	  watch: {
	  	script: {
	  		files: ['js/src/es6.js'],
	  		tasks: ['babel'],
	  		options: {
      		reload: true
    		}
	  	}
	  }
	});
  
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-babel');

  // Default task(s).
  grunt.registerTask('default', ['babel', 'watch']);
};