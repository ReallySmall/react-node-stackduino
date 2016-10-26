import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_no-script';

const cx = classNames.bind(styles);

export default class NoScript extends Component {

  constructor(props) {
    super(props);
  };

  render() {

    return (
      <p className={cx('no-script-show')}>This bit needs JavaScript enabled to work</p>
    );

  }
};
