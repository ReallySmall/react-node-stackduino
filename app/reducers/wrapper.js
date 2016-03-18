import {
  GET_WRAPPER_REQUEST,
  GET_WRAPPER_SUCCESS,
  GET_WRAPPER_FAILURE } from 'constants/index';


export default function settings(state = {
  wrapper: [],
  newWrapper: ''
}, action) {
  switch (action.type) {
    case GET_WRAPPER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_WRAPPER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        wrapper: action.req.data
      });
    case GET_WRAPPER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    default:
      return state;
  }
}
