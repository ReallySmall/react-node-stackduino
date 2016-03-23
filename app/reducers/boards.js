import {
  GET_BOARD_REQUEST,
  GET_BOARD_SUCCESS,
  GET_BOARD_FAILURE } from 'constants/index';


export default function boards(state = {
  boards: []
}, action) {
  switch (action.type) {
    case GET_BOARD_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_BOARD_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        boards: [...boards, action.req.data]
      });
    case GET_BOARD_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });

    default:
      return state;
  }
}
