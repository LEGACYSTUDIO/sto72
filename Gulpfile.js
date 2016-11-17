'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

var sass_path = './sass/styles.scss';
var css_path = './css';

gulp.task('sass', function(){
	gulp.src(sass_path)
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix())
		.pipe(gulp.dest(css_path));
});

gulp.task('default', ['sass'], function(){
	gulp.watch(sass_path, ['sass']);
});