import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LegacyWarning from 'components/LegacyWarning';
import EnableJS from 'components/EnableJS';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'
import HeaderContainer from 'containers/HeaderContainer';
import FooterContainer from 'containers/FooterContainer';
import UIScripts from 'ui';
import CookieBanner from 'components/CookieBanner';
import classNames from 'classnames/bind';
import 'css/main';
import styles from 'css/main';
import Image from 'components/Image';

import { fetchWrapper } from 'actions/wrapper';

const cx = classNames.bind(styles);


/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
const App = ({children, location}) => {

  //Data that needs to be called before rendering the component
  //This is used for server side rending via the fetchComponentDataBeforeRending() method
  const need = [
    fetchWrapper
  ];

  return (
    <div>
      <HeaderContainer />
      <div className={cx('view-container')}>
        <div className={cx('page-backing')}>
          <div className={cx('container')}></div>
        </div>
        <ReactCSSTransitionGroup 
          component="div"
          transitionName="fade" 
          transitionEnterTimeout={500} 
          transitionLeaveTimeout={500}>
            {React.cloneElement(children, {
              key: location.pathname
            })}
        </ReactCSSTransitionGroup>
     	</div>
      <FooterContainer />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
