import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_error';

const cx = classNames.bind(styles);

export default class Error extends Component {

  render(){

  	const { size, message } = this.props;

    return ( 
		<p className={cx('col-md-12', 'error', 'plain', 'size-' + size)}>
			<span className={cx('icon', 'fa', 'fa-times-circle')} />
			<span className={cx('message')}>{message || 'Loading error'}</span>
		</p>
    );
  }

}
