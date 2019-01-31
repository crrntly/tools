module.exports = (ctx) => {
  const DEBUG = ctx.env !== 'production';

  return {
    from: 'src/styles/app.css',
    to: 'public/app.css',
    map: DEBUG,
    plugins: {
      'postcss-import': {
        addDependencyTo: ctx,
      },
      'postcss-preset-env': {
        browsers: ['last 2 versions'],
        features: {
          rem: false,
        },
      },
      'postcss-reporter': {
        clearMessages: true,
      },
      cssnano: !DEBUG ? {
        autoprefixer: false,
      } : false,
    },
  };
};
