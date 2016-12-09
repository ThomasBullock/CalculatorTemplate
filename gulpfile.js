'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
		sass = require('gulp-sass'),
		maps = require('gulp-sourcemaps'),
		autoprefixer = require('gulp-autoprefixer');



gulp.task("concatScripts", function(){
		return gulp.src([
			'js/jquery.js', 
			'js/sticky/jquery.sticky.js', 
			'js/main.js'])
		.pipe(maps.init())
		.pipe(concat('app.js'))
		.pipe(maps.write('./'))		
		.pipe(gulp.dest('js'));
});

gulp.task("minifyScripts", ["concatScripts"], function(){
	return gulp.src("js/app.js")
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('js'));
});

gulp.task('compileSass', function() {
	return gulp.src("scss/styles.scss")
		.pipe(maps.init())
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(maps.write('./'))
		.pipe(gulp.dest('css'));
}) 

gulp.task('watchFiles', function() {
	gulp.watch('scss/**/*.scss', ['compileSass']);
	gulp.watch('js/main.js', ['concatScripts'])
})


gulp.task("build", ['minifyScripts', 'compileSass'], function(){
	return gulp.src(["css/styles.css", "js/app.min.js", "index.html", "img/**", "fonts/**"], { base: './'})
					.pipe(gulp.dest('dist'));
});

gulp.task('serve', ['watchFiles']);  

gulp.task("default", function() {
	gulp.start('build'); //note removed clean task - build will run after clean (the only dependency of the default task has finished)
});