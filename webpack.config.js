const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  context: path.resolve('./src'),

  entry: {
    app: './app.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(css|less)/,
        loader: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  },

  devtool: 'cheap-eval-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Angular App',
      template: './index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new CopyPlugin({
      patterns: [{ from: './assets', to: './assets' }]
    })
  ],

  devServer: {
    contentBase: path.resolve('./dist'),
    port: 9000,
    clientLogLevel: 'silent',
    open: true
  }
};

module.exports = config;