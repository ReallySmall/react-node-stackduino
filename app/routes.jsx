import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import Vote from 'containers/Vote';
import About from 'containers/About';
import Login from 'containers/Login';
import Home from 'containers/Home';
import Boards from 'containers/Boards';
import Articles from 'containers/Articles';
import Gallery from 'containers/Gallery';
import Dashboard from 'containers/Dashboard';

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
      <Route path="boards" component={Boards} />
      <Route path="articles" component={Articles} />
      <Route path="gallery" component={Gallery} />
    </Route>
  );
};
