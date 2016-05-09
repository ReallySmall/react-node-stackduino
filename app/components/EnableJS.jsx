import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from 'css/components/_no-js';
import { Link } from 'react-router';

const cx = classNames.bind(styles);

export default class EnableJS extends Component {

  render() {
    return (
      <div className={cx("header-message", "no-js")}>
        <noscript>
          <div className={cx('container')}>
            <div className={cx('row')}>
              <div className={cx('col-md-12')}>
                <p className={cx('plain')}>Enable JavaScript</p>
              </div>
            </div>
          </div>
        </noscript>
      </div>
    );
  }

}