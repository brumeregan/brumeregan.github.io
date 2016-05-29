const gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rigger = require('gulp-rigger');
var watch = require('gulp-watch');
const imagemin = require('gulp-imagemin');


gulp.task('default', ['build']);

var path = {
	public: {
		html: 'public/',
		js: 'public/js/',
		css: 'public/css/',
		cssie: 'public/css/',
		img: 'public/img/',
		font: 'public/font/'
	},

	src: {
		html: 'src/*.html',
		js: 'src/js/main.js',
		jslib: 'src/js/lib.js',
		jslibie: 'src/js/lib_ie.js',
		css: 'src/css/core.scss',
		cssie: 'src/css/ie.scss',
		img: 'src/img/**/*.*',
		font: 'src/font/**/*.*'
	},
	watch: {
		html: 'src/**/*.html',
		js: 'src/js/**/*.js',
		css: 'src/css/**/*.scss',
		img: 'src/img/**/*.*',
		font: 'src/font/**/*.*'
	},
	clean: './public'
};



gulp.task('html', function(){
	return gulp.src(path.src.html)
	.pipe(gulp.dest(path.public.html))
});

gulp.task('scss', function(){
	return gulp.src(path.src.css)
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(autoprefixer())
	// .pipe(cssnano())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(path.public.css));
});

gulp.task('scss:ie', function(){
	return gulp.src(path.src.cssie)
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(autoprefixer())
	// .pipe(cssnano())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(path.public.cssie));
});

gulp.task('js', function(){
	return gulp.src(path.src.js)
	.pipe(rigger())
	.pipe(sourcemaps.init())
	.pipe(uglify())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(path.public.js));
});

gulp.task('js:lib', function(){
	return gulp.src(path.src.jslib)
	.pipe(rigger())
	.pipe(sourcemaps.init())
	.pipe(uglify())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(path.public.js));
});

gulp.task('js:ie', function(){
	return gulp.src(path.src.jslibie)
	.pipe(rigger())
	.pipe(sourcemaps.init())
	.pipe(uglify())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(path.public.js));
});

gulp.task('img', function(){
	return gulp.src(path.src.img)
	.pipe(imagemin())
	.pipe(gulp.dest(path.public.img));
});

gulp.task('font', function(){
	return gulp.src(path.src.font)
	.pipe(gulp.dest(path.public.font));
});

gulp.task('build', [
	'html',
	'scss',
	'scss:ie',
	'js:lib',
	'js:ie',
	'js',
	'img',
	'font'
	]);