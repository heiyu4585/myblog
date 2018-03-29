'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')


function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

var ExtractTextPlugin = require("extract-text-webpack-plugin")

var projectRoot = path.resolve(__dirname, '../');
// var glob = require('glob');
var entries = utils.getEntry([projectRoot+'/src/modules/**/*.js', projectRoot+'/src/modules/**/*.js']); // 获得入口js文件
// console.log(entries)
// var env = process.env.NODE_ENV
// // check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// // various preprocessor loaders added to vue-loader at the end of this file
// var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
// var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
// var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

console.log('=========entries');
console.log(entries);
module.exports = {
    context: path.resolve(__dirname, '../'),
    // entry: {
    //   app: './src/main.js'
    // },
    entry: entries,
    output: {
        path: config.build.assetsRoot,//打包后的文件存放的地方
        filename: "js/[name].[hash].js",//打包后输出文件的文件名
        publicPath: process.env.NODE_ENV === 'production'//模板、样式、脚本、图片等资源对应的server上的路径
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        // fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'vue$': 'vue/dist/vue',
            'src': path.resolve(__dirname, '../src'),
            'common': path.resolve(__dirname, '../src/common'),
            'components': path.resolve(__dirname, '../src/components'),
            'assets': path.resolve(__dirname, '../assets'),
            '@util': path.resolve(__dirname, '../util'),

        }
    },
    // resolveLoader: {
    //   fallback: [path.join(__dirname, '../node_modules')]
    // },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig,
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ],
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
}