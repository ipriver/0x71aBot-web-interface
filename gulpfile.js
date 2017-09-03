const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const pump = require('pump');
const autoprefixer = require('gulp-autoprefixer');
const runSequence = require('run-sequence');

const NODE_ENV = process.env.NODE_ENV || 'development';

gulp.task('fonts', function() {
  return gulp.src('./src/**/fonts/*')
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function () {
  if (NODE_ENV !== 'production') {
    return gulp.src('./src/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./dist'));
  } else {
    return gulp.src('./src/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
              browsers: ['last 2 versions'],
              cascade: false
          }))
      .pipe(cleanCSS())
      .pipe(gulp.dest('./dist'));
  }
});

gulp.task('watch', function (cb) {
  gulp.watch('./src/**/*.scss', ['sass']);
  gulp.watch('./src/**/images/*', ['imagemin']);
  gulp.watch('./src/**/*.html', ['minify-html']);
  gulp.watch('./src/**/fonts/*', ['fontsIntoBuild']);
  cb;
});

gulp.task('imagemin', () =>
    gulp.src('./src/**/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist'))
);

gulp.task('minify-html', function() {
  return gulp.src('src/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('robots', function() {
    return gulp.src('src/robots.txt')
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['sass', 'imagemin', 'minify-html', 'fonts', 'robots']);



