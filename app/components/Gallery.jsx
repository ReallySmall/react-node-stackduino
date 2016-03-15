import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_gallery-page';

const cx = classNames.bind(styles);

export default class Gallery extends Component {

	constructor(props) {
  	super(props);
	};

	render() {

  	return (
    	<div className={cx('view-animate-container')}>
        	<div className={cx('container')}>
          		<h1>Gallery</h1>
        	</div>
      	</div>
  	);

	}
};

Gallery.propTypes = {
  list: PropTypes.array.isRequired
};
