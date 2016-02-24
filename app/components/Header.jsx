/**
 * Header
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/main';
import styles from 'scss/components/_header';
import Link from 'components/Link';
import Navigation from 'components/Navigation';

const cx = classNames.bind(styles);

export default class Header extends Component {

  Header.propTypes = {};

  Header.contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {

    return (
      <div>
      <header className={cx('site-header')}>
        <div className={cx('container')}>
          <div className={cx('row')}>
            <div id="logo" className={cx('site-branding')}>
              <Link className={cx('home-link')} to="/">
                <p className={cx('animated-site-logo')}>
                  <span className={cx('fa', 'fa-pause')}></span>
                  <span className={cx('fa', 'fa-camera')}></span>
                </p>
                <div className={cx('siteDescriptor')}>
                  <h1 className={cx('site-title')}>Stackduino</h1>
                  <p className={cx('site-slogan')}>An Arduino compatible focus stacking controller for macro photography</p>
                </div>
              </Link>
            </div>
            <div className={cx('social-links')}>
              <ul className={cx('plain')}>
                <li>
                  <a href="#" title="">
                    <span className={cx('fa', 'fa-github-square')}>
                      <span className={s['visually-hidden']}></span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    <span className={cx('fa', 'fa-github-square')}>
                      <span className={s['visually-hidden']}></span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    <span className={cx('fa', 'fa-github-square')}>
                      <span className={s['visually-hidden']}></span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <Navigation className={cx('nav')} />
      </div>
    );
  }

}
