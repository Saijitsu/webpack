var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
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
  plugins: [new HtmlWebpackPlugin(
      {title: 'Hello title de page'}
  )]
};