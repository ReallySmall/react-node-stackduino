import React, { Component, PropTypes } from 'react';
import HeaderContainer from 'containers/HeaderContainer';
import Footer from 'containers/Footer';
import Navigation from 'containers/Navigation';
import 'scss/main';

/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
const App = ({children}) => {
  return (
    <div>
      <HeaderContainer />
      <Navigation />
        {children}
      <Footer />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
