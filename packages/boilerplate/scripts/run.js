/**
 * @file Generic helper for running a task from the command line.
 * @example
 * $ node scripts/run clean
 */
function run(fn) {
  const task = typeof fn.default === 'undefined' ? fn : fn.default;
  return task();
}

/* eslint-disable */
if (require.main === module && process.argv.length > 2) {
  delete require.cache[__filename];
  run(require(`./${process.argv[2]}.js`)).catch(err => { console.error(err.stack); process.exit(1); });
}
/* eslint-enable */

module.exports = run;
