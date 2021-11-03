'use strict';
const path = require('path');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
console.log('环境变量：', process.env.NODE_ENV);
exports.default = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash].js',
        // 清除当前打包
        clean: true,
    },
    // devtool: 'source-map',
    // plugins: [
    //     new CleanWebpackPlugin(),
    // ]
})