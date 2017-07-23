var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var initial = require('postcss-initial')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        './app/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                context: './app/index',
                postcss: [ // <---- postcss configs go here under LoadOptionsPlugin({ options: { ??? } })
                    autoprefixer(), initial()
                ]
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        })
    ],
    resolve: {
        modules: [
            path.join(__dirname, 'app'),
            'node_modules'
        ]
    },
    module: {
        loaders: [
            {test: /\.(js)x?$/, loader: 'babel-loader'},
            {test: /\.scss$/, loader: 'style-loader!css-loader?minimize&modules&importLoaders=2&localIdentName=[local]___[hash:base64:5]!autoprefixer-loader?browsers=last 2 version!sass-loader?outputStyle=expanded'},
            {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'}
        ]
    }
}
