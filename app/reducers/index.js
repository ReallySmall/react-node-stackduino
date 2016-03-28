import { combineReducers } from 'redux';
import post from 'reducers/post';
import homepage from 'reducers/homepage';
import boards from 'reducers/boards';
import boardIndex from 'reducers/boardIndex';
import wrapper from 'reducers/wrapper';
import gallery from 'reducers/gallery';
import { routeReducer as routing } from 'react-router-redux';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  boards,
  boardIndex,
  post,
  homepage,
  gallery,
  wrapper,
  routing
});

export default rootReducer;
