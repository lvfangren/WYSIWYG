'use strict';
const path = require('path');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const smp = new SpeedMeasurePlugin();

const webpackConfigs = merge(baseWebpackConfig, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../dist'),
        // 开发环境不使用hash，增加构建速度
        filename: '[name].bundle.js',
        // 清除当前打包
        clean: true,
    },
    // 开启开发，测试环境浏览器source map调试
    devtool: 'eval',
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        contentBase: './dist',
        hot: true,
        proxy: {
            '/api': {
                target:'https://api.publicapis.org/', // 你请求的第三方接口
                changeOrigin:true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite:{  // 路径重写，
                    '^/api': ''  // 替换target中的请求地址，也就是说/api=/target，请求target这个地址的时候直接写成/api即可。
                },
            }
        },
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        // new BundleAnalyzerPlugin(),
    ],
});

// smp存在会导致报VueLoaderPlugin不存在相关配置的错误
// exports.default = smp.wrap(webpackConfigs);
exports.default = webpackConfigs;