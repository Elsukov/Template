"use strict";

const { params, plugins: $ } = require("./variables");

module.exports = () =>
    $.gulp.src("fonts/*")
        .pipe($.gulp.dest(`${params.out}/statics/fonts`))
        .pipe($.gulp.dest(`${params.prod}/statics/fonts`))
        .pipe($.gulp.dest(`${params.site}/statics/fonts`))
        .pipe($.reload({ stream: true }));