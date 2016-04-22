import {  
  GET_BOARDS_INDEX_REQUEST,
  GET_BOARDS_INDEX_SUCCESS,
  GET_BOARDS_INDEX_FAILURE,
  GET_BOARD_REQUEST,
  GET_BOARD_SUCCESS,
  GET_BOARD_FAILURE } from 'constants/index';

export default function boards(state = {
  teasers: [],
  details: {},
  requestFailed: false
}, action) {
  switch (action.type) {
    case GET_BOARDS_INDEX_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_BOARDS_INDEX_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        requestFailed: false,
        teasers: action.req.data
      });
    case GET_BOARDS_INDEX_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        requestFailed: true
      });
    case GET_BOARD_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        requestFailed: false
      });
    case GET_BOARD_SUCCESS:
      
      let boardDetails = action.req.data;
      let slug = boardDetails.slug;
      let boardsDetails = state.details; 

      boardsDetails[slug] = boardDetails;
      
      return Object.assign({}, state, {
        isFetching: false,
        requestFailed: false,
        details: boardsDetails
      });
    case GET_BOARD_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        requestFailed: true
      });

    default:
      return state;
  }
}
