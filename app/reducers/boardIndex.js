import {
  GET_BOARDS_INDEX_REQUEST,
  GET_BOARDS_INDEX_SUCCESS,
  GET_BOARDS_INDEX_FAILURE } from 'constants/index';


export default function boardIndex(state = {
  teasers: []
}, action) {
  switch (action.type) {
    case GET_BOARDS_INDEX_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_BOARDS_INDEX_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        teasers: action.req.data
      });
    case GET_BOARDS_INDEX_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });

    default:
      return state;
  }
}
