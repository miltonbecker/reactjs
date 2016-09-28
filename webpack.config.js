'use strict';

module.exports = {
    entry: "./react.js",
    output: {
        path: __dirname + "/bundles/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader" },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
