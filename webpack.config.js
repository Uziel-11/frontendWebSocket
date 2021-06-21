const path = require("path")
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                //Loaders para archivos .js
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|gif|jpg|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[hash].[ext]'
                        }
                    }
                ]
            },
            {//Loaders para archivos .css
                test: /\.css$/,
                use:  ['style-loader','css-loader']
            }
        ],
    },

    plugins: [
        new htmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html"
        }),

    ],

    devServer: {
        historyApiFallback : true,
        compress: true,
        port: 3001,
    }
};
