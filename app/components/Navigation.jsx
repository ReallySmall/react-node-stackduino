/**
 * Navigation
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_navigation';
import Link from 'components/Link';

const cx = classNames.bind(styles);

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={cx('preface-area')}>
        <div className={cx('container')}>
          <nav className={cx('row')}>
            <ul>
              <li className={cx('col-sm-4')}><Link className={cx('preface-block')} to="/boards"><h2><span class={cx('fa', 'fa-code-fork')}></span>Boards</h2></Link></li>
              <li className={cx('col-sm-4')}><Link className={cx('preface-block')} to="/articles"><h2><span class={cx('fa', 'fa-code-gears')}></span>Articles</h2></Link></li>
              <li className={cx('col-sm-4')}><Link className={cx('preface-block')} to="/gallery"><h2><span class={cx('fa', 'fa-code-star')}></span>Gallery</h2></Link></li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }

}

Navigation.propTypes = {
  navItems: PropTypes.array.isRequired
};