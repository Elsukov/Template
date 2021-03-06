"use strict";

const { bs, reload } = require("../browserSync");

module.exports = {
    params : {
        out     : "public",
        prod    : "public/prod",
        site    : "../backend/web/statics",
        htmlSrc : "pug/index.pug",
        levels: ["xs", "sm", "md", "lg", "xl"],
        html: ["pug/*.pug", "components/**/*.pug"],
        blocksName : [
            "Header",
            "Footer",
        ],
        js: [
            "components/index.js"
        ],
        libs : [
            "node_modules/cookiehunter/index.js"
        ],
        json: "components/**/*.json",
        css: [],
        sass: [
            "setting.block/bootstrap.scss",
            "setting.block/custom.scss"
        ],
        images: [],
        type: {
            css   : "components/**/**/*.css",
            sass  : "components/**/**/*.scss",
            js    : "components/**/**/*.js",
            images: "components/**/**/*.{gif,jpg,png,ico,svg}"
        }
    },
    plugins: {
        gulp         : require("gulp"),
        concat       : require("gulp-concat"),
        rename       : require("gulp-rename"),
        path         : require("path"),
        url          : require("gulp-css-url-adjuster"),
        autoprefixer : require("autoprefixer"),
        postcss      : require("gulp-postcss"),
        pug          : require("gulp-pug"),
        babel        : require("gulp-babel"),
        jshint       : require("gulp-jshint"),
        plumber      : require("gulp-plumber"),
        uglify       : require("gulp-uglify"),
        sass         : require("gulp-sass"),
        fs           : require("fs"),
        clean        : require("gulp-clean"),
        replace      : require("gulp-replace"),
        merge        : require("gulp-merge-json"),
        htmlmin      : require("gulp-htmlmin"),
        csso         : require("postcss-csso"),
        bs           : bs,
        reload       : reload
    }
};