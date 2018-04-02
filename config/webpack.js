"use strict";

const { params,  plugins : $ } = require("./variables");
const webpackConfig = require('../webpack.config.js');
const gutil = require("gulp-util");
const webpack = require("webpack");

module.exports = () => {
    webpack(
        webpackConfig,
        (err, stats) => {
            if(err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", stats.toString({
                // output options
            }));
        }
    );

    return $.gulp.src('public/main.js')
        .pipe($.gulp.dest(params.site))
        .pipe($.reload({ stream: true }));
}
    