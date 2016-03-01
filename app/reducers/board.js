import {
  TYPING,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  GET_BOARDS_REQUEST,
  GET_BOARDS_SUCCESS,
  GET_BOARDS_FAILURE } from 'constants/index';


export default function board(state = {
  boards: [],
  newBoard: ''
}, action) {
  switch (action.type) {
    case TYPING:
      return Object.assign({}, state,
        { newBoard: action.newBoard }
      );
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
    case INCREMENT_COUNT:
      return {
        boards: [
        ...state.boards.slice(0, action.index),
        Object.assign({}, state.boards[action.index], {
          count: state.boards[action.index].count + 1
        }),
        ...state.boards.slice(action.index + 1)
        ],
        newBoard: state.newBoard
      };
    case DECREMENT_COUNT:
      return {
        boards: [
        ...state.boards.slice(0, action.index),
        Object.assign({}, state.boards[action.index], {
          count: state.boards[action.index].count - 1
        }),
        ...state.boards.slice(action.index + 1)
        ],
        newBoard: state.newBoard
      };

    default:
      return state;
  }
}
