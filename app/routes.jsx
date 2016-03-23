import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/App';
import HomepageContainer from 'containers/HomepageContainer';
import BoardsContainer from 'containers/BoardsContainer';
import BoardContainer from 'containers/BoardContainer';
import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';
import GalleryContainer from 'containers/GalleryContainer';

export default (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomepageContainer} />
      <Route path="boards" component={BoardsContainer} />
      <Route path="boards/:slug" component={BoardContainer} />
      <Route path="articles" component={PostsContainer} />
      <Route path="articles/:slug" component={PostContainer} />
      <Route path="gallery" component={GalleryContainer} />
    </Route>
  );
};
