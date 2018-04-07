"use strict";

const { params, plugins: $ } = require("./variables");

module.exports = function () {

    $.bs.init({
        files: ["./*.css", "./*.js", "./index.html"],
        server: {
            baseDir : $.path.resolve(params.out),
            middleware : [historyApiFallback()]
        }
    });

    $.gulp.watch(params.html, ["htmlReload"]);
    $.gulp.watch([params.type.sass, "./setting.block/*.scss"], ["css"]);
    $.gulp.watch(params.type.images, ["images"]);
    $.gulp.watch(params.type.js, ["webpack"]);
};