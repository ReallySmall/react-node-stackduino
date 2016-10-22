import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from 'css/components/_outdated-browser';

const cx = classNames.bind(styles);

export default class LegacyWarning extends Component {

  render() {
    return (
      <div className={cx("header-message", "outdated-browser")}>
        <div className={cx("container")}>
          <div className={cx("row")}>
            <p className={cx("plain")}><strong>Your browser is very out of date. Consider upgrading it to view this site at its best.</strong></p>
          </div>
        </div>
      </div>
    );
  }

}