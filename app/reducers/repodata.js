import {
  GET_REPO_DATA_REQUEST,
  GET_REPO_DATA_SUCCESS,
  GET_REPO_DATA_FAILURE } from 'constants/index';

export default function repodata(state = {
  repos: {},
  isFetching: false,
  requestFailed: false
}, action) {
  switch (action.type) {
    case GET_REPO_DATA_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_REPO_DATA_SUCCESS:

      console.log(action.req.data);

      let repoDetails = action.req.data;
      let url = repoDetails.url;
      let allRepos = state.repos; 

      allRepos[url] = repoDetails;

      return Object.assign({}, state, {
        isFetching: false,
        requestFailed: false,
        repos: allRepos
      });
    case GET_REPO_DATA_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        requestFailed: true
      });

    default:
      return state;
  }
}
