/**
 * @file Log messages to the console.
 */
const chalk = require('chalk');

class Logger {
  constructor() {
    this.options = {
      prefix: 'APP',
    };

    this.configure = this.configure.bind(this);
    this.message = this.message.bind(this);
  }

  configure(userOptions) {
    this.options = Object.assign({}, this.options, userOptions);

    return this.options;
  }

  message(str, color = 'white') {
    return process.stdout.write(`[${chalk.blue(this.options.prefix)}] ${chalk[color](str)}\n`);
  }
}

module.exports = new Logger();
