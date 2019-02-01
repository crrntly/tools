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
        stage: 2,
        features: {
          'nesting-rules': true,
          'custom-media-queries': true,
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
