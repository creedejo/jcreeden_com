var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require('gulp-minify-css');


gulp.task('watch',function(){
	gulp.watch('src/js/**/*.js',['scripts']);
	gulp.watch('src/scss/**/*.scss',['styles']);
});

gulp.task('scripts',function(){
	return gulp.src('./src/js/**/*.js')
	.pipe(sourcemaps.init())
	.pipe(concat('main.js'))
	.pipe(gulp.dest('./assets/js/'))
	.pipe(rename('main.min.js'))
	.pipe(uglify())
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./assets/js'));
});


gulp.task('styles',['clean'],function(){
	gulp.src('./src/scss/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./assets/styles'));
});

gulp.task('clean', function() {
    gulp.src('./styles/', { read: false })
        .pipe(clean());
});



gulp.task('default', ['watch']);