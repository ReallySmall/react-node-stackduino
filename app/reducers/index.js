import { combineReducers } from 'redux';
import user from 'reducers/user';
import topic from 'reducers/topic';
import post from 'reducers/post';
import homepage from 'reducers/homepage';
import board from 'reducers/board';
import wrapper from 'reducers/wrapper';
import { routeReducer as routing } from 'react-router-redux';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  user,
  topic,
  board,
  post,
  homepage,
  wrapper,
  routing
});

export default rootReducer;
