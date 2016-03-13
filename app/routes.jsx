import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/App';
import Home from 'containers/Home';
import BoardsContainer from 'containers/BoardsContainer';
import BoardContainer from 'containers/BoardContainer';
import PostsContainer from 'containers/PostsContainer';
import Gallery from 'containers/Gallery';

export default (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="boards" component={BoardsContainer} />
      <Route path="boards/:versionid" component={BoardContainer} />
      <Route path="articles" component={PostsContainer} />
      <Route path="gallery" component={Gallery} />
    </Route>
  );
};
