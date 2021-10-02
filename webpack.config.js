const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry:"./src/client/index.js",
    output:{
        path: __dirname + "/src/public",
        filename: "min-script.js",
    },
    module:{
        rules:[
            {
                use:'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            test: /\.js$/,
            exclude: /node_modules/,
            extractComments: false
        })],
    },
}