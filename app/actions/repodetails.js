/*eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import request from 'axios';
import md5 from 'spark-md5';
import * as types from 'constants/index';

polyfill();

let API_ENDPOINT = '/api/repos';

/*
 * Utility function to make AJAX requests using isomorphic fetch.
 * You can also use jquery's $.ajax({}) if you do not want to use the
 * /fetch API.
 * Note: this function relies on an external variable `API_ENDPOINT`
 *        and isn't a pure function
 * @param Object Data you wish to pass to the server
 * @param String HTTP method, e.g. post, get, put, delete
 * @param String endpoint
 * @return Promise
 */
function makeRepoDetailsRequest(method, url, data) {
  return request[method](API_ENDPOINT + (url ? ('?repoApiUrl=' + url) : ''), data);
}

// Fetch gallery images
export function fetchRepoDetail(url) {
  return {
    type: types.GET_REPO_DETAILS,
    promise: makeRepoDetailsRequest('get', url) // TODO pass in query
  }
}