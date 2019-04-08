var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, './public'),
    compress: true,
    port: 9000
  },
  entry: {
      app: './src/index.js',
afficher: './src/afficher.js'
},
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js'
  },
  module:{
      rules:[
          {test:/\.css$/,
        use: [
            'style-loader', 'css-loader'
        ]}
      ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(
      {title: 'Hello title de page'}
  )]
};