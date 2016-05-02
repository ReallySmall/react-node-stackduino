import React, { Component, PropTypes } from 'react';
import Icon from 'react-fa';
import classNames from 'classnames/bind';
import styles from 'css/components/_loading';

const cx = classNames.bind(styles);

export default class Loading extends Component {

  render(){

  	const { size } = this.props || '3x';

    return (
		<p className={cx('loading', 'plain', 'size-' + size)}>
			<Icon spin name="refresh" size={size} />
			<span className={cx('message')}>Loading content...</span>
		</p>
    );
  }

}
