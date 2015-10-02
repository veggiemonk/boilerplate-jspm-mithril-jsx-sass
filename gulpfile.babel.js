import gulp from 'gulp';
import msx from 'gulp-msx';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import browserSync from 'browser-sync';

browserSync.create();

const filePath = {
  src: {
    jsx:  'app/**/*.jsx',
    scss: 'app/**/*.scss',
    root: './'
  },
  dst: {
    js:  './app',
    css: './css'
  }
};

// Static Server + watching scss/jsx files
gulp.task('serve', ['sass'], function () {

  browserSync.init({server: filePath.src.root});

  gulp.watch(filePath.src.scss, ['sass']);
  gulp.watch(filePath.src.jsx, ['jsx']).on('change', browserSync.reload);
});


gulp.task('jsx', function () {
  return gulp.src(filePath.src.jsx)
    .pipe(msx({harmony: true, es6module: true}))
    .pipe(gulp.dest(filePath.dst.js))
});


gulp.task('sass', function () {
  gulp.src(filePath.src.scss)
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(filePath.dst.css));
});


gulp.task('build', ['jsx', 'sass']);

gulp.task('default', ['serve']);
