import {
  GET_POSTS_INDEX_REQUEST,
  GET_POSTS_INDEX_SUCCESS,
  GET_POSTS_INDEX_FAILURE,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE } from 'constants/index';

export default function posts(state = {
  teasers: [],
  details: {},
  isFetching: false,
  requestFailed: false
}, action) {
  switch (action.type) {
    case GET_POSTS_INDEX_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_POSTS_INDEX_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        teasers: action.req.data
      });
    case GET_POSTS_INDEX_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        requestFailed: true
      });
    case GET_POST_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_POST_SUCCESS:
      
      let postDetails = action.req.data;
      let slug = postDetails.slug;
      let postsDetails = state.details; 

      postsDetails[slug] = postDetails;
      
      return Object.assign({}, state, {
        isFetching: false,
        details: postsDetails
      });
    case GET_POST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        requestFailed: true
      });


    default:
      return state;
  }
}
