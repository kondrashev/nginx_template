const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'App.tsx'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      PORT: '3000',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', 'css', '.scss'],
    alias: {
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['babel-loader'],
        exclude: /(node_modules)/,
      },
      {
        test: /\.(css|s[ac]ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|eot|otf|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: { modules: true },
          },
        ],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, './src'),
    port: 4000,
    hot: 'only',
    compress: true,
    open: false,
  },
};
