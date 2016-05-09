import { combineReducers } from 'redux';
import posts from 'reducers/posts';
import homepage from 'reducers/homepage';
import boards from 'reducers/boards';
import repodata from 'reducers/repodata';
import wrapper from 'reducers/wrapper';
import gallery from 'reducers/gallery';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  wrapper,
  boards,
  repodata,
  posts,
  homepage,
  gallery,
  routing: routerReducer
});

export default rootReducer;
