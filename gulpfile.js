var gulp         = require('gulp'),
		jade         = require('gulp-jade'),
	  sass         = require('gulp-sass'),
  	browserSync  = require('browser-sync'),
	  concat       = require('gulp-concat'),
  	uglify       = require('gulp-uglifyjs'),
	  del          = require('del');
	  cssmin       = require('gulp-cssmin'),
	  rename       = require('gulp-rename'),
	  autoprefixer = require('gulp-autoprefixer'),
 	  imagemin     = require('gulp-imagemin');

gulp.task('jade', function() {
	gulp.src('src/**/*.jade')
		.pipe(jade())
	.pipe(gulp.dest('dist/'))
});

gulp.task('sass', function() {
	return gulp.src('src/assets/styles/**/*.sass')
		.pipe(sass())
		.pipe(autoprefixer(['last 15 versions', '> 1%']))
		.pipe(cssmin())
		.pipe(gulp.dest('dist/css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'src'
		},
		notify: false
	});
});

gulp.task('imagemin', function() {
	gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('watch', ['browser-sync', 'cssmin', 'csslibs'], function() {
	gulp.watch('src/sass/**/*.sass', ['sass']);
	gulp.watch('src/css/**/*.css', ['cssmin']);
	gulp.watch('src/*.html', browserSync.reload);
	gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'jade', 'sass', 'imagemin'], function() {
	var buildCss = gulp.src([
		'src/css/main.min.css',
	])
	.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('src/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('src/js/**/*')
	.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('src/*.html')
	.pipe(gulp.dest('dist'));
});
