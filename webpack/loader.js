// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./config.js');

let loader = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
    },
    {
        test: /\.css$/,
        use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    importLoaders: 1,
                    localIdentName: '[name]_[local]_[hash:base64]',
                    sourceMap: true,
                    minimize: true
                }
            }
        ]
    },
    {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
    },
]

module.exports = loader;
