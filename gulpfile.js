'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function (done) {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))  
    .pipe(gulp.dest('./src/css'));
    done();
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', gulp.parallel('sass'));
});