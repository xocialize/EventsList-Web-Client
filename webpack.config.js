const EnvironmentPlugin = require('webpack').EnvironmentPlugin;
const DotenvPlugin = require('webpack-dotenv-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const dotenvFile = './.env';

module.exports = {
  entry: './src/main.js',
  output: {
    path: '../server/public',
    filename: './bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new DotenvPlugin({sample: dotenvFile, path: dotenvFile}),
    new EnvironmentPlugin(['API_TOKEN', 'CLOUD_ID']),
    new ExtractTextPlugin('./bundle.css'),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015'],
        cacheDirectory: true //,
        // plugins: ['transform-runtime']
      }
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style!', 'css?sourceMap!sass?sourceMap'),
    },
    // {
    //   test: /\.scss$/,
    //   loader: 'style!css?sourceMap!sass?sourceMap'
    // },
    {
      test: /\.css$/,
      loader: 'style!css?sourceMap'
    },
    {
      test: /\.html$/,
      loader: 'html'
    },
    {
      test: /\.svg$/,
      loader: 'svg-url-loader'
    }]
  },
  sassLoader: {
    includePaths: [ './src/scss/includes' ]
  }
};
