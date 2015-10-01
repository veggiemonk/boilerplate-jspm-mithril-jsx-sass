var gulp = require('gulp')
var msx = require('gulp-msx')
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task('transform-jsx', function() {
	return gulp.src('./app/**/*.jsx')
	.pipe(msx({harmony: true, es6module: true}))
	.pipe(gulp.dest('./app'))
})


gulp.task('sass', function () {

	gulp.src('./app/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(concat('app.js'))
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./css'));
})

gulp.task('sass:watch', function () {
  gulp.watch('./app/**/*.scss', ['sass']);
})

gulp.task('default', ['transform-jsx','sass'])
