"use strict";

const { plugins: $ } = require("./variables");

module.exports = () =>
    $.gulp.src("./components/data.json", {read: false})
        .pipe($.plumber())
        .pipe($.clean());