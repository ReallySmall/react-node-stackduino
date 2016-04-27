import {
  GET_HOMEPAGE_REQUEST,
  GET_HOMEPAGE_SUCCESS,
  GET_HOMEPAGE_FAILURE } from 'constants/index';

export default function homepage(state = {
  content: null,
  isFetching: false,
  requestFailed: false
}, action) {
  switch (action.type) {
    case GET_HOMEPAGE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_HOMEPAGE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        requestFailed: false,
        content: action.req.data
      });
    case GET_HOMEPAGE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        requestFailed: true
      });

    default:
      return state;
  }
}
