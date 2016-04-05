/*eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import request from 'axios';
import md5 from 'spark-md5';
import * as types from 'constants/index';

polyfill();

let API_ENDPOINT = '/api/gallery';

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
function makeGalleryImagesRequest(method, data) {
  return request[method](API_ENDPOINT, data);
}

// Fetch gallery images
export function fetchGalleryImages(tags, perPage, page) {
  return {
    type: types.GET_GALLERY_IMAGES,
    promise: makeGalleryImagesRequest('get')
  }
}