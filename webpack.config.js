const path = require("path");
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        vendor:[
            'lodash'
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Output Management'
        }),
        new CleanWebpackPlugin('[dist]')
    ],
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    }
}