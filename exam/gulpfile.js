const gulp = require('gulp'),
			sass = require('gulp-sass'),
			sourcemaps = require('gulp-sourcemaps'),
			livereload = require('gulp-livereload'),
			uglify = require('gulp-uglify'),
			concat = require('gulp-concat');


gulp.task('default', ['html', 'img', 'js:lib',  'js', 'scss', 'css:ie']);

gulp.task('html', function(){
	return gulp.src('./index.html')
	.pipe(gulp.dest('./public/'));
});



gulp.task('css:ie', function(){
	return gulp.src('./css/src/ie.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./public/css'));
});

gulp.task('js', function() {
  return gulp.src('./js/src/*.js')
    .pipe(concat('all.min.js', {newLine: ';\n'}))

    .pipe(gulp.dest('./public/js'));
});

gulp.task('js:lib', function(){
	return gulp.src('./js/lib/*.js')
	// .pipe(concat('lib.min.js', {newLine: ';\n'}))

	.pipe(gulp.dest('./public/js/'));
})

gulp.task('img', function(){
	return gulp.src('./img/**/*.*')
	.pipe(gulp.dest('./public/img'));
});

gulp.task('scss', function(){
	return gulp.src('./css/src/core.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./public/css'));
	// .pipe(livereload());
});

gulp.task('scss:watch', function () {
	livereload.listen();
  gulp.watch('./css/**/*.scss', ['scss']);
});
