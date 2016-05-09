import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from 'css/components/_bread-crumb';

const cx = classNames.bind(styles);

export default class LegacyWarning extends Component {

  render() {
    return (
      <div className={cx("header-message", "ie")}>
        <div className={cx("container")}>
          <div className={cx("row")}>
            <div className={cx("col-md-12")}>
            </div>
          </div>
        </div>
      </div>
    );
  }

}