'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');

const srcFolder = './src'
const buildFolder = './build'
const appFolder = '/botFactory'
const staticFolder = appFolder + '/static'
const templatesFolder = appFolder + '/templates'

gulp.task('sass', function () {
  return gulp.src(srcFolder + staticFolder + '/styles/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(srcFolder + staticFolder + '/styles'));
});

gulp.task('sass:watch', function () {
  gulp.watch(staticFolder + '/styles/scss/*.scss', ['sass']);
});

gulp.task('imagemin', () =>
    gulp.src(srcFolder + staticFolder + '/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest(buildFolder + appFolder))
);

gulp.task('minify-css',() => {
  return gulp.src(srcFolder + appFolder + '/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(buildFolder + appFolder));
});

/*Don't forget to remove sourcemaps before the real production*/
gulp.task('production', function() {
  return gulp.src(srcFolder + staticFolder + '/styles/*.css')
    .pipe(gulp.dest(buildFolder + '/del/'));

});