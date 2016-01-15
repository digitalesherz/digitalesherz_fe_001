var gulp = require('gulp'),
	less = require('gulp-less'),
	path = require('path'),
	minifyCss = require('gulp-minify-css');;
 
gulp.task('default', function () {
  return gulp.src('./src/assets/less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/stylesheets'));

    return gulp.src('./public/stylesheets/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/stylesheets'));
});