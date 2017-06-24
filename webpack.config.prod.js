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
    rules: [
      {
        test: /\.(js)x?$/,
        use: 'babel-loader'
      },
      {
        test: /\.styl$/,
        use: [{loader: 'style-loader'},
        {loader: 'css-loader', options: {minimize: true}},
        {loader: 'postcss-loader'},
        {loader: 'stylus-loader'}
      ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
}
