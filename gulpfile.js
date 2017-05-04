'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%']
};

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('js', function () {
  return gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});
