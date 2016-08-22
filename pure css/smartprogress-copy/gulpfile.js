const gulp = require('gulp'),
		  scss = require('gulp-sass'),
		  sourcemaps = require('gulp-sourcemaps'),
		  rigger = require('gulp-rigger'),
		  browserSync = require('browser-sync').create();

gulp.task('scss', function(){
	return gulp.src('src/css/core.scss')
				.pipe(sourcemaps.init())
			  .pipe(scss().on('error', scss.logError))
			  .pipe(sourcemaps.write())
				.pipe(gulp.dest('./public/css/'));
});

gulp.task('html', function(){
	return gulp.src('./src/index.html')
				.pipe(gulp.dest('./public/'));
});

gulp.task('scss:watch', function () {
  gulp.watch('./src/css/**/*.scss', ['scss']);
});

gulp.task('server', function() {
    browserSync.init({
        server: 'public'
    });
    browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('img', function(){
	return gulp.src('src/img/**/*.*')
					.pipe(gulp.dest('public/img/'));
});

gulp.task('default', ['html', 'img', 'scss', 'scss:watch']);