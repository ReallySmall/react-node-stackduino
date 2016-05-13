import React, { Component, PropTypes } from 'react';
import Icon from 'react-fa';
import classNames from 'classnames/bind';
import styles from 'css/components/_error';

const cx = classNames.bind(styles);

export default class Error extends Component {

  render(){

  	const { size } = this.props || '3x';

    return ( 
		<p className={cx('error', 'plain', 'size-' + size)}>
			<Icon name="times-circle" size={size} className={cx('icon')} />
			<span className={cx('message')}>{this.props.message}</span>
		</p>
    );
  }

}
