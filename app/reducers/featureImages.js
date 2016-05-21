import {
  GET_FEATURE_IMAGES_REQUEST,
  GET_FEATURE_IMAGES_SUCCESS,
  GET_FEATURE_IMAGES_FAILURE } from 'constants/index';


export default function featureImages(state = {
  images: [],
  isFetching: false,
  requestFailed: false
}, action) {
  switch (action.type) {
    case GET_FEATURE_IMAGES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_FEATURE_IMAGES_SUCCESS:
      if(action.req.status < 400 && action.req.data.photos){
        const photoset = action.req.data.photos.photo;
        return Object.assign({}, state, {
          isFetching: false,
          requestFailed: false,
          images: photoset
        });
      } else {
        return Object.assign({}, state, {
          isFetching: false,
          requestFailed: true
        });
      }
    case GET_FEATURE_IMAGES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        requestFailed: true
      });

    default:
      return state;
  }
}
