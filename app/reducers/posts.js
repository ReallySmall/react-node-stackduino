import Immutable from 'immutable';
import {
  GET_POSTS_INDEX_REQUEST,
  GET_POSTS_INDEX_SUCCESS,
  GET_POSTS_INDEX_FAILURE,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  FILTER_BY_TAGS } from 'constants/index';

export default function posts(state = {
  teasers: [],
  tags: [],
  filters: null,
  filterLength: 0,
  details: {},
  isFetching: false,
  requestFailed: false
}, action) {
  switch (action.type) {
    case GET_POSTS_INDEX_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        requestFailed: false
      });
    case GET_POSTS_INDEX_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        requestFailed: false,
        teasers: action.req.data.teasers,
        tags: action.req.data.tags
      });
    case GET_POSTS_INDEX_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        requestFailed: true
      });
    case GET_POST_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        requestFailed: false
      });
    case GET_POST_SUCCESS:
      
      let postDetails = action.req.data;
      let slug = postDetails.slug;
      let postsDetails = state.details; 

      postsDetails[slug] = postDetails;
      
      return Object.assign({}, state, {
        isFetching: false,
        requestFailed: false,
        details: postsDetails
      });
    case GET_POST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        requestFailed: true
      });
    case FILTER_BY_TAGS:
      return Object.assign({}, state, {
        filters: action.filters,
        filterLength: action.filters.length
      });

    default:
      return state;
  }
}
