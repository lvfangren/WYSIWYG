const path = require('path')
const {
    VueLoaderPlugin
} = require('vue-loader')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080,
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
                exclude: /node_modules/,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
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
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        esModule: false
                    }
                }
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            template: './index.html',
            filename: './index.html'
        }),
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
}