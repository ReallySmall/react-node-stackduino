import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/App';
import Login from 'containers/Login';
import Home from 'containers/Home';
import BoardsContainer from 'containers/BoardsContainer';
import Articles from 'containers/Articles';
import Gallery from 'containers/Gallery';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (!authenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    callback();
  };
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="boards" component={BoardsContainer} />
      <Route path="articles" component={Articles} />
      <Route path="gallery" component={Gallery} />
    </Route>
  );
};
