"use strict";
const { params, plugins: { fs } } = require("./variables");

let folder, file, fileCss, textCss, textJs;

const getBreakpoint = (lvl, direction = "up") => `@include media-breakpoint-${direction}(${lvl})`;

const createLessFromJade = function (file, blockName, screen) {
    let textLess = `${getBreakpoint(screen)} {\n  .${blockName} {\n`;

    let selectors = [];

    let replacer = function (str, p1) {
        if(selectors.indexOf(p1) === -1) {
            selectors.push(p1);
            textLess += `    &${p1.replace(`.${blockName}`, "")} {\n\n    }\n`;
        }
    };
    file.replace(new RegExp(`(\\.${blockName}__[\\s\\S]+?)(?=\\s|!|=|\\(|\\.|:)`, "gi"), replacer);
    return `${textLess}  }\n}${(screen === "xs" ? `\n\n${getBreakpoint("xs", "down")} {\n\n}` : "")}`;
};

module.exports = function () {
    let contentFileJade;
    for ( let blockName of params.blocksName ) {
        contentFileJade = fs.readFileSync(`./components/${blockName}/${blockName}.pug`, "utf8");

        for ( let level of params.levels ) {
            textCss  = createLessFromJade(contentFileJade, blockName, level);

            folder   = `./components/${blockName}/${level}`; // ./components/example/xs.example

            if (fs.existsSync(folder)) {
                console.log("\x1b[33m", `----!NOTICE: Component "${blockName.toUpperCase()}" already exists!----`); 
                continue;
            }

            file     = `${folder}/${blockName}`;
            fileCss  = `${file}.scss`;

            try {
                fs.mkdirSync(folder);
                fs.writeFileSync(fileCss, textCss);
            } catch (err) {
                console.log(err);
            }
        }
    }
}