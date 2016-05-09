import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from 'css/components/_bread-crumb';

const cx = classNames.bind(styles);

export default class CookieBanner extends Component {

  render() {
    return (
      <div className={cx("header-message", "cookie")}>
        <div className={cx("container")}>
          <div className={cx("row")}>
            <div className={cx("col-md-12")}>
              <p className={cx('plain')}>This site uses cookies</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

}