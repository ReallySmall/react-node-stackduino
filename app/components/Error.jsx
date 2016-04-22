import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_loading';

const cx = classNames.bind(styles);

export default class Loading extends Component {

  render(){
    return ( 
		<p className={cx('error')}>
			{this.props.message}
		</p>
    );
  }

}
