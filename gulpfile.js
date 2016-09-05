var gulp         = require('gulp'),
		jade         = require('gulp-jade'),
	  sass         = require('gulp-sass'),
  	browserSync  = require('browser-sync').create(),
	  concat       = require('gulp-concat'),
  	uglify       = require('gulp-uglifyjs'),
	  del          = require('del'),
	  cssmin       = require('gulp-cssmin'),
	  rename       = require('gulp-rename'),
	  autoprefixer = require('gulp-autoprefixer'),
 	  imagemin     = require('gulp-imagemin');

gulp.task('jade', function() {
	gulp.src('src/layouts/*.jade')
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
	browserSync.init({
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

gulp.task('copy', function() {
	return gulp.src('src/vendors/**/*.css')
  		.pipe(gulp.dest('dist/css'));
})

gulp.task('watch', ['browser-sync', 'sass', 'jade'], function() {
	gulp.watch('src/assets/styles/**/*.sass', ['sass']);
	gulp.watch('dist/*.html', browserSync.reload);
	gulp.watch('src/assets/scrips/**/*.js', browserSync.reload);
	gulp.watch('src/layouts/**/*.jade', ['jade']);

});

gulp.task('build', ['clean', 'jade', 'sass', 'imagemin', 'copy'], function() {
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
