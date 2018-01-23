const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry : {
        index:'./scripts/index.js',
        bootstrap:'./scripts/bootstrap.js'
    },
    output: {
        filename : 'dist/[name].bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader", // translates CSS into CommonJS
                options: {
                    sourceMap: true
                }, 
            }, {
                loader: "sass-loader", // compiles Sass to CSS
                options: {
                    sourceMap: true
                },
            }]
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename:'dist/index.html',
            template:'./index.html',
            chunks: ['index']
        }),
        new htmlWebpackPlugin({
            filename:'dist/bootstrap.html',
            template:'./bootstrap.html',
            chunks: ['bootstrap']
        })
    ]

    
}