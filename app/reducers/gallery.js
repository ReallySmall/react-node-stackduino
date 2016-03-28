import {
  GET_GALLERY_SETTINGS_REQUEST,
  GET_GALLERY_SETTINGS_SUCCESS,
  GET_GALLERY_SETTINGS_FAILURE,
  GET_GALLERY_IMAGES_REQUEST,
  GET_GALLERY_IMAGES_SUCCESS,
  GET_GALLERY_IMAGES_FAILURE } from 'constants/index';


export default function gallery(state = {
  settings: [],
  images: []
}, action) {
  switch (action.type) {
    case GET_GALLERY_SETTINGS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_GALLERY_SETTINGS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        settings: action.req.data
      });
    case GET_GALLERY_SETTINGS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    case GET_GALLERY_IMAGES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_GALLERY_IMAGES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        settings: action.req.data
      });
    case GET_GALLERY_IMAGES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });

    default:
      return state;
  }
}
