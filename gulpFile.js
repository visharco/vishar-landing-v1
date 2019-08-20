
var gulp        = require('gulp'),
   autoprefixer = require('gulp-autoprefixer'),
   minifyCSS    = require('gulp-minify-css');


 

 gulp.task('autoprefix' , function() {
     return gulp.src('./src/**/*.css')
        .pipe(autoprefixer({
            Browserslist: ['last 2 versions']
        }))
        .pipe(gulp.dest('./src'))
 })


 gulp.task('minifycss', function() {
    return gulp.src('./src/index.css')
    //   .pipe(minifyCSS({keepBreaks:true}))
      .pipe(gulp.dest('./src'))
  });


 