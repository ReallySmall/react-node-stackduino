import {
  TYPING,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  GET_HOMEPAGE_REQUEST,
  GET_HOMEPAGE_SUCCESS,
  GET_HOMEPAGE_FAILURE } from 'constants/index';


export default function homepage(state = {
  content: []
}, action) {
  switch (action.type) {
    case TYPING:
      return Object.assign({}, state,
        { newHomepage: action.newBoard }
      );
    case GET_HOMEPAGE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_HOMEPAGE_SUCCESS:
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
