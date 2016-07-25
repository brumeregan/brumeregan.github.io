var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

var path = {
	public: {
		html: 'public/',
		js: 'public/js/',
		css: 'public/css/',
		cssabout: 'public/css/',
		csspro: 'public/css/',
		cssblog: 'public/css/',
		csswork: 'public/css',
		csscon: 'public/css',
		img: 'public/img/',
		font: 'public/font/'
	},

	src: {
		html: 'src/*.html',
		js: 'src/js/main.js',
		jslib: 'src/js/lib.js',
		jslibie: 'src/js/lib_ie.js',
		css: 'src/css/core.scss',
		cssabout: 'src/css/about.scss',
		csspro: 'src/css/projects.scss',
		cssblog: 'src/css/blog.scss',
		csswork: 'src/css/work.scss',
		csscon: 'src/css/contact.scss',
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

gulp.task('sass', function(){
	return gulp.src(path.src.css)
				.pipe(sourcemaps.init())
				.pipe(sass({outputStyle: 'expanded'})
					.on('error', sass.logError))
				.pipe(sourcemaps.write())
				.pipe(gulp.dest(path.public.css));
				// .pipe(browserSync.stream());
});

gulp.task('sass:about', function(){
	return gulp.src(path.src.cssabout)
				.pipe(sourcemaps.init())
				.pipe(sass().on('error', sass.logError))
				.pipe(sourcemaps.write())
				.pipe(gulp.dest(path.public.cssabout));
});

gulp.task('sass:projects', function(){
	return gulp.src(path.src.csspro)
				.pipe(sourcemaps.init())
				.pipe(sass().on('error', sass.logError))
				.pipe(sourcemaps.write())
				.pipe(gulp.dest(path.public.csspro));
});

gulp.task('sass:blog', function(){
	return gulp.src(path.src.cssblog)
				.pipe(sourcemaps.init())
				.pipe(sass().on('error', sass.logError))
				.pipe(sourcemaps.write())
				.pipe(gulp.dest(path.public.cssblog));
});

gulp.task('sass:work', function(){
	return gulp.src(path.src.csswork)
				.pipe(sourcemaps.init())
				.pipe(sass().on('error', sass.logError))
				.pipe(sourcemaps.write())
				.pipe(gulp.dest(path.public.csswork));
});
gulp.task('sass:contact', function(){
	return gulp.src(path.src.csscon)
				.pipe(sourcemaps.init())
				.pipe(sass().on('error', sass.logError))
				.pipe(sourcemaps.write())
				.pipe(gulp.dest(path.public.csscon));
});
// gulp.task('html:about', function(){
// 	return gulp.src(path.src.about)
// 				.pipe(gulp.dest(path.public.html));
// });

gulp.task('watch', function(){
	gulp.watch(path.watch.css, ['sass', 'sass:contact']);
	gulp.watch('src/js/*.js', ['js']);
	gulp.watch('src/*.html', ['html'])
});

// gulp.task('server', ['sass'], function(){
// 	browserSync.init({
// 		server: "./public"
// 	});

// 	gulp.watch("src/css/*.scss", ['sass']);
// 	gulp.watch('src/*.html').on('change', browserSync.reload);
// });

gulp.task('js', function(){
	return gulp.src('./src/js/*.js')
			.pipe(gulp.dest('./public/js/'));
})

gulp.task('img', function(){
	return gulp.src(path.src.img)
				.pipe(gulp.dest(path.public.img));
});

gulp.task('default', ['html', 'img', 'sass', 'watch']);