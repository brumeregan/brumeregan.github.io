module.exports = function(grunt) {

	grunt.initConfig({
	  sass: {
	    dist: {
	      files: [{    
	      	expand: true,
	      	cwd: 'css/src',
	      	src: ['core.scss'],
	      	dest: 'css/dist',
	      	ext: '.css'
	      }]
	    }
	  },
	  watch: {
	  	sass: {
	  		files: ['css/src/*.scss'],
	  		tasks: ['sass']
	  	}
	  }
	});
  
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch']);
};