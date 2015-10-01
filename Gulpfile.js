var gulp = require('gulp')
var msx = require('gulp-msx')

gulp.task('transform-jsx', function() {
  return gulp.src('./app/**/*.jsx')
    .pipe(msx({harmony: true, es6module: true}))
    .pipe(gulp.dest('./app'))
})

// Compile and automatically prefix stylesheets
/*
gulp.task('styles', () => {
	const AUTOPREFIXER_BROWSERS = [
		'ie >= 10',
		'ie_mob >= 10',
		'ff >= 30',
		'chrome >= 34',
		'safari >= 7',
		'opera >= 23',
		'ios >= 7',
		'android >= 4.4',
		'bb >= 10'
	];

	// For best performance, don't add Sass partials to `gulp.src`
	return gulp.src([
		'app/!**!/!*.scss',
		'app/!**!/!*.css'
	])
		.pipe($.newer({dest: '.tmp/styles', ext: '.css'}))
		.pipe($.sourcemaps.init())
		.pipe($.sass({
			precision: 10
		}).on('error', $.sass.logError))
		.pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest('.tmp/styles'))
		// Concatenate and minify styles
		.pipe($.if('*.css', $.minifyCss()))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('dist/styles'))
		.pipe($.size({title: 'styles'}));
});
*/


gulp.task('default', ['transform-jsx'])