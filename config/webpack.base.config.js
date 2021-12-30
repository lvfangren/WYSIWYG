'use strict';
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');
module.exports = {
    // stats 选项让你更精确地控制 bundle 信息该怎么显示。
    // stats: "errors-only",
    entry: './src/main.ts',
    // 替代了原来的cache-loader和dll插件
    cache: {
        type: 'filesystem',
        // 可选配置
        buildDependencies: {
            config: [__filename],  // 当构建依赖的config文件（通过 require 依赖）内容发生变化时，缓存失效
        },
    },
    // Support the Top Level Await Stage 3 proposal, it makes the module an async module when await is used on the top-level.
    experiments: {
        topLevelAwait: true,
    },
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: {
                    loader: 'vue-loader',
                    options: {
                        hotReload: true
                    },
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
        // 不对其进行webpack解析依赖和构建，包的体积不会减少，但打包速度会提升
        noParse: /lodash/,
    },
    plugins: [
        new ESLintPlugin({
            extensions: ['.js', '.ts']
        }),
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html',
            favicon: path.resolve(__dirname, '../public/favicon2.png')
        }),
        // 进度条显示打包编译
        new webpack.ProgressPlugin({
            activeModules: false,
            entries: true,
            handler(percentage, message, ...args) {
              // custom logic
            //   console.log('打印进度',percentage,message,args);
            },
            modules: true,
            modulesCount: 5000,
            profile: false,
            dependencies: true,
            dependenciesCount: 10000,
            percentBy: null,
        }),
        // 定义环境和变量(为啥要改成使用Dotenv，而不是DefinePlugin。可以参考： https://awdr74100.github.io/2020-06-29-webpack-dotenvwebpack/)
        new Dotenv({
          path: process.env.NODE_ENV === 'development'
          ? path.resolve(__dirname, './env/.env.dev')
          : path.resolve(__dirname, './env/.env.prod'),
          systemvars: true,
          allowEmptyValues: true,
        }),
        // new webpack.DefinePlugin({ 
        //     'process.env': {
        //         'names': 1
        //     }
        // }),
        // 避免引入无用的模块,让加载的第三方库体积变小
        // new webpack.IgnorePlugin({
        //     checkResource(resource) {
        //       // do something with resource
        //     //   return true | false;
        //     },
        // }),
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.ts', '.vue', '.json'],
        // 项目不含npm link，减小解析工作量
        symlinks: false
    },
};

