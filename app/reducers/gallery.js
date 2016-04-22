import {
  GET_GALLERY_IMAGES_REQUEST,
  GET_GALLERY_IMAGES_SUCCESS,
  GET_GALLERY_IMAGES_FAILURE } from 'constants/index';


export default function gallery(state = {
  images: [],
  pages: undefined,
  page: undefined,
  isFetching: false,
  requestFailed: true
}, action) {
  switch (action.type) {
    case GET_GALLERY_IMAGES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_GALLERY_IMAGES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        requestFailed: false,
        images: action.req.data.photos.photo,
        pages: action.req.data.photos.pages,
        page: action.req.data.photos.page
      });
    case GET_GALLERY_IMAGES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        requestFailed: true
      });

    default:
      return state;
  }
}
