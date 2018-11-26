const config= require('./config.js');
const webpack = require('webpack'); //引入的webpack,使用lodash
const HtmlWebpackPlugin = require('html-webpack-plugin');  //将html打包


let plugin = [
    new HtmlWebpackPlugin({file: config.mainPage, template: config.mainPage}),
];

if(config.isPro){

}

module.exports= plugin;
