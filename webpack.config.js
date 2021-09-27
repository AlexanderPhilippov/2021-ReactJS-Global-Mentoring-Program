const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

module.exports = {
    mode: process.env.NODE_ENV,
    context: path.join(__dirname, 'src'),
    entry: {
        main: ['@babel/polyfill', 'index.tsx']
    },
    output: {
        filename: isProd ? '[name].[fullhash].js' : '[name].js',
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            Components: path.resolve(__dirname, 'src/Components'),
            Assets: path.resolve(__dirname, 'src/Assets')
        }
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: [/node_modules/, /dist/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
                        }
                    },
                    'eslint-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif|ttf|woff|woff2|eot)/,
                use: ['file-loader']
            }
        ]
    },
    devtool: isDev ? 'source-map' : false,
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: isProd ? '[name].[fullhash].css' : '[name].css',
            chunkFilename: '[name].[chunkhash].css'
        }),
    ],
    optimization:{
        minimizer: [
            new OptimizeCssAssetWebpackPlugin(),
            new TerserWebpackPlugin({
                extractComments: false
            })
        ],
        splitChunks: {
            chunks: 'all'
        }
    },
    performance: {
        hints: false,
    },
    devServer: {
        port: 3000
    }
}
