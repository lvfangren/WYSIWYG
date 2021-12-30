'use strict';
const path = require('path');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
console.log(`%c环境变量: ${process.env.NODE_ENV}`, 'background: #87ceeb;');
exports.default = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash].js',
        // 清除当前打包
        clean: true,
    },
})