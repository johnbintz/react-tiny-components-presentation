var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var WatchIgnorePlugin = require('watch-ignore-webpack-plugin');
var path = require('path');

var COMPRESS = false;

module.exports = {
  context: __dirname + '/src',
  entry: ['./index.js', './global.scss'],
  output: {
    path: __dirname + '/dist',
    filename: 'presentation.js'
  },
  devtool: 'inline-source-map',
  watchOptions: {
    poll: true,
    aggregateTimeout: 1000
  },
  module: {
    loaders: [
      { test: /\.js$/, include: /\/src\//, loader: "babel-loader?stage=0"},
      {
        test: /styles\.scss$/, include: /\/src\//,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass')
      },
      {
        test: /global.scss$/, include: /\/src\//,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[local]!sass')
      },
      { test: /\.html$/, include: /\/src\//, loader: 'file?name=[name].[ext]' },
      { test: /\.{jpg,png}/, include: /\/src\//, loader: 'image-size?name=[name].[ext]' }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new WatchIgnorePlugin([
      path.resolve(__dirname ,'./node_modules/')
    ])
  ]
};

if (COMPRESS) {
  module.exports.plugins.push(
    new CompressionPlugin({
      asset: '{file}.gz',
      algorithm: 'gzip',
      regExp: /\.(js|html|css)$/
    })
  );
}
