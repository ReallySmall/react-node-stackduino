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

      let allRepos = state.repos; 

      const id = action.req.data.id;
      const body = JSON.parse(action.req.data.body);

      allRepos[id] = body;

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
