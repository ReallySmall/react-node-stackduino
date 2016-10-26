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
          <h1><span className={cx('fa', 'fa-warning')}></span> Not Found</h1>
          <p>Sorry, this content doesn't exist.</p>
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
