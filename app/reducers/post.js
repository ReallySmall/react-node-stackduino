import {
  TYPING,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE } from 'constants/index';


export default function post(state = {
  posts: [],
  newPost: ''
}, action) {
  switch (action.type) {
    case TYPING:
      return Object.assign({}, state,
        { newPost: action.newPost }
      );
    case GET_POSTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_POSTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.req.data
      });
    case GET_POSTS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    case INCREMENT_COUNT:
      return {
        posts: [
        ...state.posts.slice(0, action.index),
        Object.assign({}, state.posts[action.index], {
          count: state.posts[action.index].count + 1
        }),
        ...state.posts.slice(action.index + 1)
        ],
        newPost: state.newPost
      };
    case DECREMENT_COUNT:
      return {
        posts: [
        ...state.posts.slice(0, action.index),
        Object.assign({}, state.posts[action.index], {
          count: state.posts[action.index].count - 1
        }),
        ...state.posts.slice(action.index + 1)
        ],
        newPost: state.newPost
      };

    default:
      return state;
  }
}
