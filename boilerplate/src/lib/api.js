import axios, { CancelToken } from 'axios';
import { API_URL } from '../../config';

/**
 * Mapping of request id's and cancel tokens.
 * @type {Object}
 */
const cancellableRequests = {};

/**
 * Cancel request if an instance exits.
 * @param {String} key
 * @return {Function|Boolean}
 */
export function cancelRequest(key) {
  if (cancellableRequests[key]) {
    return cancellableRequests[key].cancel('canceled');
  }

  return false;
}

/**
 * Wrapper around axios http client. Provides a way for
 * general error handling on bad requests/responses.
 * @example
 * api(config).get(...).then(...);
 * @return {Object} axios client instance
 */
export default function api(config, onError) {
  const instance = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    ...config,
  });

  instance.interceptors.request.use((cfg) => {
    // if a cancel key is passed in cancel any pending requests
    // and capture a new cancellation token.
    if (cfg.cancelKey) {
      cancelRequest(cfg.cancelKey);
      cancellableRequests[cfg.cancelKey] = CancelToken.source();

      return {
        ...cfg,
        cancelToken: cancellableRequests[cfg.cancelKey].token,
      };
    }

    return cfg;
  });

  // global API status handlers
  instance.interceptors.response.use(res => res, onError);

  return instance;
}
