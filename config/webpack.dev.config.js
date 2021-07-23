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
        proxy: {
            // v2ex公开接口(接口无鉴权)
            '/api': {
                target:'https://www.v2ex.com/api/', // 你请求的第三方接口
                changeOrigin:true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite:{  // 路径重写，
                    '^/api': ''  // 替换target中的请求地址，也就是说/api=/target，请求target这个地址的时候直接写成/api即可。
                },
            }
        },
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            filename: './index.html'
        }),
        // new BundleAnalyzerPlugin(),
    ],
})