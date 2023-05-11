const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
       index: './src/index.js',
        new: './src/new.js',
    },
    
    devServer: {
        static: './dist'
    },

    optimization: {
        runtimeChunk: 'single',
    },

    output: {
        filename: '[name]bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.scss$/,
                use : [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },

            {
                test: /\.css$/,
                use : [
                    'style-loader',
                    'css-loader',
                ],
            },


        ],
    },
};