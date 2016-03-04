/*eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import request from 'axios';
import md5 from 'spark-md5';
import * as types from 'constants/index';

polyfill();

let API_ENDPOINT = '/api/homepage';

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
function makeHomepageRequest(method, id, data) {
  return request[method](API_ENDPOINT + (id ? ('/' + id) : ''), data);
}

function increment(index) {
  return { type: types.INCREMENT_COUNT, index };
}

function decrement(index) {
  return { type: types.DECREMENT_COUNT, index };
}

// Fetch posts logic
export function fetchHomepage() {
  return {
    type: types.GET_HOMEPAGE,
    promise: makeHomepageRequest('get')
  }
}

export function incrementCount(id, index) {
  return dispatch => {
    dispatch(increment(index));

    return makeHomepageRequest('put', id, {
        isFull: false,
        isIncrement: true
      });
    // do something with the ajax response
    // You can also dispatch here
    // E.g.
    // .then(response => {});
  };
}

export function decrementCount(id, index) {
  return dispatch => {
    dispatch(decrement(index));
    return makeHomepageRequest('put', id, {
        isFull: false,
        isIncrement: false
      });
    // do something with the ajax response
    // You can also dispatch here
    // E.g.
    // .then(response => {});
  };
}
