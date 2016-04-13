import {
  GET_HOMEPAGE_REQUEST,
  GET_HOMEPAGE_SUCCESS,
  GET_HOMEPAGE_FAILURE } from 'constants/index';

export default function homepage(state = {
  content: {},
  isFetching: false
}, action) {
  switch (action.type) {
    case GET_HOMEPAGE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_HOMEPAGE_SUCCESS:
      console.log(action.req.data);
      return Object.assign({}, state, {
        isFetching: false,
        content: action.req.data
      });
    case GET_HOMEPAGE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });

    default:
      return state;
  }
}
