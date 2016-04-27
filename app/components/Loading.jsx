import React, { Component, PropTypes } from 'react';
import Icon from 'react-fa';
import classNames from 'classnames/bind';
import styles from 'css/components/_loading';

const cx = classNames.bind(styles);

export default class Loading extends Component {

  render(){
    return (
		<p className={cx('loading')}>
			<Icon spin name="refresh" size="4x" />
			<span className={cx('visually-hidden')}>Loading content</span>
		</p>
    );
  }

}
