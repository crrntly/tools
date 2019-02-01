/**
 * @file Empty out a directory.
 */
const { emptyDir } = require('fs-extra');
const { message } = require('./log');
const { FILES } = require('../config');

module.exports = async function clean() {
  message('Starting clean...');

  await emptyDir(FILES.output);

  message('Finished clean...');
};
