import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchWrapper } from 'actions/wrapper';
import Page from 'components/Page';
import classNames from 'classnames/bind';
import styles from 'css/components/_article-teaser';

const cx = classNames.bind(styles);

class NotFoundContainer extends Component {

    static need = [
      fetchWrapper
    ];

  	constructor(props) {
    	super(props);
  	};

    componentWillMount() {

    };

  	render() {

	  	return (
        <Page>
          <h1>404</h1>
          <p><span className={cx('fa', 'fa-warning', 'fa-4x')}></span></p>
          <p>Sorry, this page doesn't exist. Perhaps it was moved or deleted.</p>
          <p><a href="/">Back to home</a>.</p>
        </Page>
	  	);

  	}
};

NotFoundContainer.propTypes = {
  // todo
};

function mapStateToProps(state, props) {

  return {

  };
  
}

export default connect(mapStateToProps)(NotFoundContainer);
