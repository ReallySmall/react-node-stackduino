import React, { Component, PropTypes } from 'react';
import Icon from 'react-fa';
import classNames from 'classnames/bind';
import styles from 'css/components/_loading';

const cx = classNames.bind(styles);

export default class Loading extends Component {

  render(){

  	const { size, message } = this.props;

    return (
		<p className={cx('loading', 'plain', 'size-' + size)}>
			<Icon spin name="refresh" size={size || '3x'} />
			<span className={cx('message')}>{message || 'Loading content'}</span>
		</p>
    );
  }

}
