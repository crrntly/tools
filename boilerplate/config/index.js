const DEBUG = process.env.NODE_ENV !== 'production';

const FILES = {
  output: 'public',
  styles: {
    src: 'src/styles/*.css',
    watch: [
      'src/styles/**/*.css',
    ],
  },
  images: {
    src: 'src/images/**/*',
    watch: 'src/images/**/*',
  },
  scripts: {
    src: 'src/index.js',
    watch: 'src/**/*.{js,jsx}',
  },
  html: {
    src: 'src/index.html',
  },
};

const ENV = {
  API_URL: 'http://localhost:5000',
  PORT: '3000',
  ...process.env,
};

module.exports = {
  DEBUG,
  FILES,
  ...ENV,
};
