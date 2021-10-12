module.exports ={
    entry: "./src/back/index.js",
    output:{
        path: __dirname + "/dist",
        filename: "bundle.back.js"
    },
    mode: "development",
    target: "node",
    watch: true
}