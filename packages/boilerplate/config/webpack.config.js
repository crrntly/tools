const path = require('path');
const webpack = require('webpack');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DEBUG, FILES } = require('./');

// paths to include in loaders
const include = [path.resolve(__dirname, '../src')];

/**
 * Get entry points
 * @return {Array}
 */
function getEntry() {
  const entry = [];

  if (DEBUG) {
    entry.push('react-dev-utils/webpackHotDevClient');
  }

  return entry.concat(path.resolve(__dirname, '..', FILES.scripts.src));
}

/**
 * Get file loaders
 * @return {Array}
 */
function getLoaders() {
  const loaders = [];

  if (DEBUG) {
    loaders.push(
      {
        test: /\.(js)$/,
        enforce: 'pre',
        include,
        use: [
          {
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve('eslint'),
            },
            loader: 'eslint-loader',
          },
        ],
      },
      {
        test: /\.(js)$/,
        enforce: 'pre',
        use: [
          {
            loader: 'source-map-loader',
          },
        ],
      },
    );
  }

  return loaders.concat({
    oneOf: [
      {
        test: /(\.js$)/,
        include,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.css$/,
        sideEffects: true,
        use: [
          {
            loader: DEBUG ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: DEBUG,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, '../config'),
              },
            },
          },
        ],
      },
      {
        test: /\.json$|\.yaml$/,
        include,
        use: [{ loader: 'json-loader' }, { loader: 'yaml-loader' }],
      },
    ],
  });
}

/**
 * Get plugins
 * @return {Array}
 */
function getPlugins() {
  const plugins = [];

  if (DEBUG) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    );
  } else {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'app.[contenthash:8].css',
      }),
    );
  }

  return plugins.concat(
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new LodashModuleReplacementPlugin({
      currying: true,
      flattening: true,
      paths: true,
      placeholders: true,
      shorthands: true,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '..', FILES.html.src),
      minify: !DEBUG ? {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      } : false,
    }),
  );
}

module.exports = {
  mode: DEBUG ? 'development' : 'production',
  devtool: DEBUG ? 'eval-source-map' : false,
  bail: !DEBUG,
  entry: getEntry(),
  output: {
    path: path.resolve(__dirname, '../public'),
    pathinfo: DEBUG,
    filename: DEBUG ? 'app.js' : 'app.[chunkhash:8].js',
    publicPath: '/',
    chunkFilename: '[chunkhash:8].js',
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  module: {
    rules: getLoaders(),
  },
  plugins: getPlugins(),
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};
