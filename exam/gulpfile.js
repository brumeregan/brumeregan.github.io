const gulp = require('gulp'),
			sass = require('gulp-sass'),
			sourcemaps = require('gulp-sourcemaps'),
			livereload = require('gulp-livereload');


gulp.task('default', ['scss', 'scss:watch']);

gulp.task('scss', function(){
	return gulp.src('./css/src/core.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./css/dist'))
	.pipe(livereload());
});

gulp.task('scss:watch', function () {
	livereload.listen();
  gulp.watch('./css/**/*.scss', ['scss']);
});
