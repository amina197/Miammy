const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: '/client/src/index.jsx',
  output: {
    path: path.join(__dirname, 'client', 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'client', 'dist'),
    },
    compress: true,
    port: 3000,
  },
  resolve: {
    enforceExtension: false,
    extensions: ['.js', '.jsx'],
  },
  plugins: [new ESLintPlugin()],
};
