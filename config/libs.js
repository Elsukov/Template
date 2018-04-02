"use strict";

const { params,  plugins : $ } = require("./variables");

let libs = params.libs.slice();
module.exports = () =>
    $.gulp.src(libs)
        .pipe($.plumber())
        .pipe($.jshint({
            esversion: 6
        }))
        .pipe($.jshint.reporter("jshint-stylish"))
        .pipe($.concat('libs.js'))
        .pipe($.gulp.dest(params.out))
        .pipe($.replace(/("use\sstrict";\s+)?\$\(function\s\(\)\s\{\}\);/g, ""))
        .pipe($.uglify())
        .pipe($.gulp.dest(params.prod))
        .pipe($.gulp.dest(params.site))
        .pipe($.reload({ stream: true }));