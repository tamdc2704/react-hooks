const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.jsx', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000
    }
}