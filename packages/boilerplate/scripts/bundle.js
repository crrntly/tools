/**
 * @file Bundle the app using Webpack.
 */
const webpack = require('webpack');
const config = require('../config/webpack.config');
const { message } = require('./log');

module.exports = async function bundle() {
  message('Started bundling...');

  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      message('Finished bundling...');

      if (err) {
        return reject(err);
      }

      const info = stats.toJson();

      if (stats.hasErrors()) {
        return reject(info.errors);
      }

      if (stats.hasWarnings()) {
        return resolve(info.warnings);
      }

      return resolve();
    });
  });
};
