const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./config.js');

let loader = [
    {
        test: /\.js$/,  //es6 => es5
        exclude: /node_modules/,
        use: 'babel-loader'
    },
    {
        test: /\.vue$/,
        loader: 'vue-loader'
    },
    {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
            appendTsSuffixTo: [/\.vue$/],
        }
    },
    {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
        ]
    },
    {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
        test: /\.(png|jpg|gif)$/, use: [{
            loader: 'file-loader', options: {
                name: '[name].[hash:8].[ext]'
            }
        }]
    },
    {test: /.(eot|woff|ttf)$/, loader: 'url-loader'}
]

module.exports = loader;
