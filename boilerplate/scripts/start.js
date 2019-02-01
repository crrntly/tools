/**
 * @file Start a local development environment.
 */
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', (err) => {
  throw err;
});

const openBrowser = require('react-dev-utils/openBrowser');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const createDevServerConfig = require('../config/webpackDevServer.config');
const config = require('../config/webpack.config');
const { message } = require('./log');
const clean = require('./clean');
const copy = require('./copy');
const { PORT } = require('../config');

module.exports = async function start() {
  await clean();
  await copy();

  const compiler = webpack(config);

  compiler.hooks.compile.tap('DevServer', () => {
    message('Started building...');
  });

  compiler.hooks.done.tap('DevServer', (stats) => {
    const { errors, warnings } = formatWebpackMessages(stats.toJson({}, true));

    if (errors.length) {
      message(['Webpack errors:', ...errors].join('\n\n'), 'red');
    }

    if (warnings.length) {
      message(['Webpack warnings:', ...warnings].join('\n\n'), 'yellow');
    }

    message('Finished building...');
  });

  const devServerConfig = createDevServerConfig(config);
  const devServer = new WebpackDevServer(compiler, devServerConfig);

  devServer.listen(PORT, 'localhost', () => {
    openBrowser(`http://localhost:${PORT}`);
  });
};
