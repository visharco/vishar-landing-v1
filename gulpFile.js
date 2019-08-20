
var gulp        = require('gulp'),
   autoprefixer = require('gulp-autoprefixer');


 

 gulp.task('autoprefix' , function() {
     return gulp.src('./src/**/*.css')
        .pipe(autoprefixer({
            Browserslist: ['last 2 versions']
        }))
        .pipe(gulp.dest('./src'))
 })