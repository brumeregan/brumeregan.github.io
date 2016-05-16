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
	  		tasks: ['sass'],
	  		options: {
      		reload: true
    		}
	  	}
	  }
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'watch']);


};