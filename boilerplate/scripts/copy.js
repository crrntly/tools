/**
 * @file Copy static files to build artifacts folder.
 */
const fs = require('fs-extra');
const { message } = require('./log');

module.exports = async function copy() {
  message('Started copy...');

  await Promise.all([
    fs.copy('src/robots.txt', 'public/robots.txt'),
  ]);

  message('Finished copy...');
};
