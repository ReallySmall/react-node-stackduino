/*eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import request from 'axios';
import md5 from 'spark-md5';
import * as types from 'constants/index';

polyfill();

let API_ENDPOINT = '/api/gallery';
let API_FLICKR_ENDPOINT = '/api/flickr/bytags';

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
function makeGallerySettingsRequest(method, id, data) {
  return request[method](API_ENDPOINT + (id ? ('/' + id) : ''), data);
}

function makeGalleryImagesRequest(tags, perPage, page) {
  return request(API_FLICKR_ENDPOINT + '?tags=' + tags + '&per_page=' + perPage + '&page=' + page);
}

// Fetch gallery settings
export function fetchGallerySettings() {
  return {
    type: types.GET_GALLERY_SETTINGS,
    promise: makeGallerySettingsRequest('get')
  }
}

// Fetch gallery settings
export function fetchGalleryImages(tags, perPage, page) {
  return {
    type: types.GET_GALLERY_IMAGES,
    promise: makeGalleryImagesRequest(tags, perPage, page)
  }
}