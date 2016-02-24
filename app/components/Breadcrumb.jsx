/**
 * Breadcrumb
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from 'scss/components/_bread-crumb.scss';
import Link from './Link';

export default class Breadcrumb extends Component {

  render() {
    return (
      <section className={cx('breadcrumb-nav')}>
        <div className={cx('container')}>
          <div className={cx('row')}>
            <nav className={cx('page-utils', 'col-md-12')}>
              <ul className={cx('breadcrumb')}>
                <li>
                  <a href="/">Home</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    );
  }

}