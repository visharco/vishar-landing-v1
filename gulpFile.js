
var gulp        = require('gulp'),
   autoprefixer = require('gulp-autoprefixer'),
   minifyCSS    = require('gulp-minify-css'),
   cssbeautify  = require('gulp-cssbeautify')

 
// autoprefix all css to for all browsers --- > gulp autoprefix
 gulp.task('autoprefix' , function() {
     return gulp.src('./src/**/*.css')
        .pipe(autoprefixer({
            Browserslist: ['last 2 versions']
        }))
        .pipe(gulp.dest('./src'))
 })

 // minify css --- > gulp minifycss
 gulp.task('minifycss', function() {
    return gulp.src('./src/**/*.css')
      .pipe(minifyCSS({keepBreaks:true}))
      .pipe(gulp.dest('./src'))
  });


  // unminify css --- > gulp css
  gulp.task('css', function() {
    return gulp.src('./src/**/*.css')
        .pipe(cssbeautify())
        .pipe(gulp.dest('./src'));
});
 


// gulp.task('default', gulp.parallel('autoprefix', 'minifycss'));
