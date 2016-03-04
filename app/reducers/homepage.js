import {
  TYPING,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  GET_HOMEPAGE_REQUEST,
  GET_HOMEPAGE_SUCCESS,
  GET_HOMEPAGE_FAILURE } from 'constants/index';


export default function homepage(state = {
  homepage: [],
  newHomepage: ''
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
        homepage: action.req.data
      });
    case GET_HOMEPAGE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    case INCREMENT_COUNT:
      return {
        homepage: [
        ...state.homepage.slice(0, action.index),
        Object.assign({}, state.homepage[action.index], {
          count: state.homepage[action.index].count + 1
        }),
        ...state.homepage.slice(action.index + 1)
        ],
        newHomepage: state.newHomepage
      };
    case DECREMENT_COUNT:
      return {
        boards: [
        ...state.homepage.slice(0, action.index),
        Object.assign({}, state.homepage[action.index], {
          count: state.homepage[action.index].count - 1
        }),
        ...state.homepage.slice(action.index + 1)
        ],
        newHomepage: state.newHomepage
      };

    default:
      return state;
  }
}
