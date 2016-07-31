var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');


gulp.task('watch',function(){
	
});

gulp.task('scripts',function(){
	return gulp.src('src/js/**/*.js')
	.pipe(concat('main.js'))
	.pipe(gulp.dest('assets/js/'))
	.pipe(rename('main.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('assets/js'));
});


gulp.task('styles',function(){
	return gulp.src('src/scss/styles.scss')
	.pipe(sass())
	.pipe(minifyCss())
	.pipe(concat('styles.css'))
	.pipe(rename('styles.min.css'))
	.pipe(gulp.dest('assets/styles'));
});



gulp.task('default', ['watch']);