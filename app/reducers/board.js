import {
  GET_BOARDS_REQUEST,
  GET_BOARDS_SUCCESS,
  GET_BOARDS_FAILURE } from 'constants/index';


export default function board(state = {
  boards: [],
  newBoard: ''
}, action) {
  switch (action.type) {
    case GET_BOARDS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_BOARDS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        boards: action.req.data
      });
    case GET_BOARDS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });

    default:
      return state;
  }
}
