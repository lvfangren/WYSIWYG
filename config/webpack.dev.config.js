'use strict';
const path = require('path');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

exports.default = merge(baseWebpackConfig, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash].js'
    },
    devtool: 'eval',
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        contentBase: './dist',
        hot: true,
        // proxy: {
        //     '/api': {
        //         target: 'https://other-server.example.com',
        //         secure: false,
        //     },
        // },
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            filename: './index.html'
        }),
        // new BundleAnalyzerPlugin(),
    ],
})