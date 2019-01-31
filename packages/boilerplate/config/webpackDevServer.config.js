const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');

module.exports = config => ({
  clientLogLevel: 'info',
  contentBase: 'public',
  watchContentBase: true,
  hot: true,
  publicPath: config.output.publicPath,
  historyApiFallback: {
    disableDotRule: true,
  },
  quiet: true,
  overlay: false,
  before: (app) => {
    app.use(errorOverlayMiddleware());
  },
});
