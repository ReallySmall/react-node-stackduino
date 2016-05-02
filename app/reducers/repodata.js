import {
  GET_REPODATA_REQUEST,
  GET_REPODATA_SUCCESS,
  GET_REPODATA_FAILURE } from 'constants/index';

export default function repodata(state = {
  repos: {},
  isFetching: false,
  requestFailed: false
}, action) {
  switch (action.type) {
    case GET_REPODATA_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_REPODATA_SUCCESS:

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
    case GET_REPODATA_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        requestFailed: true
      });

    default:
      return state;
  }
}
