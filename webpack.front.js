const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry: "./src/front/index.js",
    output:{
        path: __dirname + "/dist/public",
        filename: "bundle.front.js"
    },
    mode: "development",
    watch: true,
    plugins : [
        new htmlWebpackPlugin({
            template : "./src/back/index.html"
        })
    ],
    module : {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}