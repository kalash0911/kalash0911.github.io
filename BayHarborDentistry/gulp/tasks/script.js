const gulp = require("gulp");
const plumber = require("gulp-plumber");
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");
const rigger = require("gulp-rigger");
const browserify = require("browserify");
const babelify = require("babelify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");

module.exports = function script() {
  return browserify(["src/js/main.js"])
    .transform(babelify)
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(gulp.dest("dist/js"))
};
