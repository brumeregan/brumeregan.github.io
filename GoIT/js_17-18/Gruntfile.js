module.exports = function(grunt) {

	grunt.initConfig({
	  concat: {  
	    css: {
	    	options: {
	    		separator: '\n'
	    	},
	    	src: ['css/src/*.css'],
	    	dest: 'css/dist/allstyle.css'
	    },
	    js: {
	    	options: {
	    		separator: ';\n'
	    	},
	    	src: ['js/src/*.js'],
	    	dest: 'js/dist/script.min.js'
	    }
	  },
	 	cssmin: {
	  	min: {
	  		src: ['css/dist/allstyle.css'],
	  		dest: 'css/dist/style.min.css'
	  	}
	  },
	  uglify: {
	  	dist: {
	  		src: ['js/dist/script.min.js'],
		  	dest: 'js/dist/script.min.js'
		  }
	  },
	  watch: {
  		css: {
    		files: ['css/src/*.css', 'js/src/*.js'],
    		tasks: ['concat'],
    		options: {
      		spawn: false,
      		reload: true
    		},
  		},
		},
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'cssmin', 'uglify']);
};