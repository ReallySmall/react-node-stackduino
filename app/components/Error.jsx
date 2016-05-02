import React, { Component, PropTypes } from 'react';
import Icon from 'react-fa';
import classNames from 'classnames/bind';
import styles from 'css/components/_loading';

const cx = classNames.bind(styles);

export default class Loading extends Component {

  render(){
    return ( 
		<p className={cx('error')}>
			<Icon name="times-circle" size="3x" />
			<span className={cx('message')}>{this.props.message}</span>
		</p>
    );
  }

}
