"use strict";

const { params, plugins: { fs } } = require("./variables");

let folder, file, fileJade, fileJs, fileJSON;

module.exports = function () {
    for ( let blockName of params.blocksName ) {
        folder     = `./blocks/${blockName}`; // ./blocks/example
        file       = `${folder}/${blockName}`; // File path
        fileJs     = `${file}.js`; // Careate js file
        fileJade   = `${file}.pug`; // Create pug file
        fileJSON   = `${file}.json`; // Create JSON file

        try {
            fs.mkdirSync(folder);
            fs.writeFileSync(fileJade, `.${blockName}`);
            fs.writeFileSync(fileJs, '',);
            fs.writeFileSync(fileJSON, `{\n  "${blockName}" : {\n\n  }\n}`);
        } catch (err) {
            console.log(err);
        }
    }
};