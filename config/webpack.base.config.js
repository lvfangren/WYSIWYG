'use strict';
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');
console.log(webpack, 'ssss');
module.exports = {
    entry: "./src/main.ts",
    cache: {
        type: 'filesystem',
        // 可选配置
        buildDependencies: {
            config: [__filename],  // 当构建依赖的config文件（通过 require 依赖）内容发生变化时，缓存失效
        },
    },
    // 
    experiments: {
        topLevelAwait: true,
    },
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }
            },
            {
                test: /\.css$/,
                // exclude: /node_modules/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'
                ],
            },
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader",
                    options: {
                        hotReload: true
                    },
                }
            },
            // 内置静态资源构建能力 —— Asset Modules
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource',
                generator: {
                    // [ext]前面自带"."
                    filename: 'assets/[hash:8].[name][ext]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    // [ext]前面自带"."
                    filename: 'font/[hash:8].[name][ext]',
                },
            }
        ],
    },
    plugins: [
        new ESLintPlugin({
            extensions: ['.js', '.ts']
        }),
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html'
        }),
        // 进度条显示打包编译
        new webpack.ProgressPlugin({
            activeModules: false,
            entries: true,
            handler(percentage, message, ...args) {
              // custom logic
              console.log('sssss',percentage,message,args);
            },
            modules: true,
            modulesCount: 5000,
            profile: false,
            dependencies: true,
            dependenciesCount: 10000,
            percentBy: null,
        })
          
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.ts', '.vue', '.json']
    },
};

