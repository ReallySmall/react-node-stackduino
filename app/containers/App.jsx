import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LegacyWarning from 'components/LegacyWarning';
import EnableJS from 'components/EnableJS';
import HeaderContainer from 'containers/HeaderContainer';
import FooterContainer from 'containers/FooterContainer';
import CookieBanner from 'components/CookieBanner';
import classNames from 'classnames/bind';
import 'css/main';
import styles from 'css/main';
import Image from 'components/Image';

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
const App = ({children}) => {
  return (
    <div>
      <HeaderContainer />
      	<div className={cx('view-container')}>
	        <ReactCSSTransitionGroup
			    component="div"
			    transitionName="page"
			    transitionEnterTimeout={10}
			    transitionLeaveTimeout={10}
	      	>
		        {React.cloneElement(children, {
		          key: Math.random()
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
