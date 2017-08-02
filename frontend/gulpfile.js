const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const pump = require('pump');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src'));
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
  gulp.watch('./src/**/images/*', ['imagemin']);
  gulp.watch('./src/**/*.css', ['minify-css', ['autoprefixer']]);
  gulp.watch('./src/**/*.html', ['minify-html']);
  gulp.watch('./src/**/js/*.js', ['minify-js']);
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

gulp.task('minify-js', function (cb) {
  pump([
        gulp.src('./src/**/js/*.js'),
        uglify(),
        gulp.dest('./build')
    ],
    cb
  );
});

gulp.task('autoprefixer', () =>
    gulp.src('./src/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./build'))
);