import createBrowserHistory from 'history/createBrowserHistory';

/**
 * Create a history provider.
 * @type {Object}
 */
export const history = createBrowserHistory();

/**
 * Route to a specific path + query.
 * @param {String|Object} args Arguments passed directly to react-router
 * @param {Boolean} replace Should replace current history state
 * @return {Object}
 */
export function routeTo(args, replace) {
  if (replace) {
    return history.replace(args);
  }

  return history.push(args);
}

/**
 * Navigate to previous state.
 * @return {Object}
 */
export function goBack() {
  return history.goBack();
}
