import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_blank';

const cx = classNames.bind(styles);

export default class LoadButton extends Component {

  render(){
    return (
    	<a href="#">
        Load more
        <span className={cx('fa', 'fa-arrow-circle-down')}></span>
      </a>
    );
  }

}
