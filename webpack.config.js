const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: {
        base: './src/static/scripts/base.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist/static/scripts/',
    },
    watchOptions: {
        aggregateTimout: 100,
    },
    devtool: NODE_ENV == 'production' ? false : 'cheap-inline-module-source-map',
    plugins: NODE_ENV == 'production' ? [
         new CleanWebpackPlugin(['dist']),
        new UglifyJSPlugin(),
    ] : [],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }

        ]
    }
};
