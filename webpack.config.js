// const webpack = require('webpack');
const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    publicPath: '/'
  },
  target: 'node',
  devtool: 'source-map',
  // devtool: 'cheap-source-map',
  // devServer: {
  //   contentBase: path.join(__dirname, 'dist/index.html'),
  //   compress: true,
  //   hot: true,
  //   host: '0.0.0.0',
  //   port: 8080
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: 'babel-loader'
      },
      {
        test: /\.(ts|tsx)?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          'image-webpack-loader'
        ],
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //     template: require('html-webpack-template'),
    //     inject: false,
    //     appMountId: 'root',
    //   }),
    new MonacoWebpackPlugin()
  ],
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\\/]node_modules[\\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.tsx',
      '.ts'
    ]
  }
}

module.exports = config;
