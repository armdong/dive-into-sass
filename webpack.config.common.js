const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('[dist]'),
    new HtmlWebpackPlugin({
      title: 'Dive into Sass',
      template: './src/index.html'
    })
  ]
}

module.exports = config