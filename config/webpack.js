"use strict";

const { params,  plugins : $ } = require("./variables");
const webpackConfig = require('../webpack.config.js');
const gutil = require("gulp-util");
const webpack = require("webpack-stream");

module.exports = () => {
    return $.gulp.src('./components/index.js')
        .pipe(webpack(webpackConfig))
        .pipe($.gulp.dest(params.site))
        .pipe($.reload({ stream: true }));
}