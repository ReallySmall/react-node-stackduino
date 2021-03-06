import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchWrapper } from 'actions/wrapper';
import Helmet from 'react-helmet';
import Page from 'components/Page';
import classNames from 'classnames/bind';
import styles from 'css/components/_article-teaser';

const cx = classNames.bind(styles);

class NotFoundContainer extends Component {

    static need = [ fetchWrapper ];

  	constructor(props) {
    	super(props);
  	};

  	render() {

	  	return (
        <Page>
          <Helmet 
            title="Not found" 
            meta={[
              {"name": "description", "content": "Sorry, this content doesn't exist" }
            ]}/>
          <p><span className={cx('fa', 'fa-warning')}></span> Sorry, couldn't get this content. There may be a network error, or it might not exist.</p>
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
