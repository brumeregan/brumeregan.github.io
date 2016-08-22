var gulp = require('gulp'),
		sass = require('gulp-sass'),
		sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function(){
	return gulp.src('css/scss/core.min.scss')
				.pipe(sourcemaps.init())
				.pipe(sass().on('error', sass.logError))
				.pipe(sourcemaps.write())
				.pipe(gulp.dest('css/'));
});

gulp.task('watch', function(){
	gulp.watch('css/**/*.scss', ['sass']);

});

gulp.task('default', ['sass']);