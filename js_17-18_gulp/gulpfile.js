'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch');;

gulp.task('default', ['js', 'css']);

gulp.task('js', function() {
  return gulp.src('js/src/*.js')
    .pipe(concat('all.min.js', {newLine: ';'}))
    .pipe(uglify())
    .pipe(gulp.dest('js/dist/'));
});
gulp.task('css', function(){
	return gulp.src('css/src/*.css')
  .pipe(sourcemaps.init())
	.pipe(concat('all.min.css'))
	.pipe(cssnano())
  .pipe(sourcemaps.write())
	.pipe(gulp.dest('css/dist/'));
});

gulp.watch('css/**/*.css', ['css']);