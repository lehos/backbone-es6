var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: {
        main: './src/main.js',
        vendor: ['jquery', 'backbone']
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'app'),
                query: {
                    presets: ['es2015']
                }
            },
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js','.scss'],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor", 
            minChunks: Infinity
        }),
    ]
};