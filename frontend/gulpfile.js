'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');


gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src'));
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
  gulp.watch('./src/**/images/*', ['imagemin'])
  gulp.watch('./src/**/*.css', ['minify-css'])
  gulp.watch('src/**/*.html', ['minify-html'])
});

gulp.task('imagemin', () =>
    gulp.src('./src/**/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build'))
);

gulp.task('minify-html', function() {
  return gulp.src('src/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./build'));
});

/*Don't forget to remove sourcemaps before the real production*/
gulp.task('minify-css',() => {
  return gulp.src('./src/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build'));
});

