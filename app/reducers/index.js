import { combineReducers } from 'redux';
import posts from 'reducers/posts';
import homepage from 'reducers/homepage';
import boards from 'reducers/boards';
import wrapper from 'reducers/wrapper';
import gallery from 'reducers/gallery';
import { routeReducer as routing } from 'react-router-redux';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  wrapper,
  boards,
  posts,
  homepage,
  gallery,
  routing
});

export default rootReducer;
