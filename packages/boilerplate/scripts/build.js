/**
 * @file Create an optimized build of the application.
 */
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const clean = require('./clean');
const copy = require('./copy');
const bundle = require('./bundle');
const { message } = require('./log');

module.exports = async function build() {
  try {
    await clean();
    await copy();
    await bundle();
  } catch (error) {
    message(error);
  }
};
