module.exports = function(grunt) {

	grunt.initConfig({
		concat: {
	    options: {
	      separator: ';',
	    },
    	dist: {
      	src: ['js/src/*.js'],
      	dest: 'js/dist/script.min.js',
    	},
  	},
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
	  uglify: {
    	script: {
      	files: {
        	'js/dist/script.min.js': ['js/dist/script.min.js']
      	}
    	}
  	},
  	cssnano: {
      options: {
          sourcemap: true
      },
      dist: {
        files: {
	        'css/dist/core.min.css': 'css/dist/core.css'
        }
      }
    },
	  watch: {
	  	sass: {
	  		files: ['css/src/*.scss'],
	  		tasks: ['sass', 'cssnano'],
	  		options: {
      		reload: true
    		}
	  	}
	  }
	});
  
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-cssnano');




  // Default task(s).
  grunt.registerTask('default', ['sass', 'cssnano', 'concat', 'uglify', 'watch']);
};