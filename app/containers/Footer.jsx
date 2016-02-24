/**
 * Footer
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_footer';
import Link from 'components/Link';

const cx = classNames.bind(styles);

export default class Footer extends Component {

  render() {

    return (
      <footer className={cx('footer')}>
        <div className={cx('container')}>
          <div className={cx('row')}>
            <ul className={cx('plain')}>
              <li className={cx('col-sm-4', 'link-block')}>
                <h3>Top macro sites</h3>
                <ul className={cx('plain')}>
                  <li>
                    <a href="http://www.photomacrography.net/">
                      www.photomacrography.net
                    </a>
                  </li>
                  <li>
                    <a href="http://extreme-macro.co.uk/">
                      extreme-macro.co.uk
                    </a>
                  </li>
                  <li>
                    <a href="http://www.johnhallmen.se/">
                      www.johnhallmen.se
                    </a>
                  </li>
                </ul>
              </li>
              <li className={cx('col-sm-4', 'link-block')}>
                <h3>Similar projects</h3>
                <ul className={cx('plain')}>
                  <li>
                    <a href="http://www.ryleeisitt.ca/articles/building-a-focus-stacking-controller/">
                      Controller by Rylee Isitt
                    </a>
                  </li>
                  <li>
                    <a href="http://www.davidhunt.ie/macro-pi-focus-stacking-using-raspberry-pi/">
                      Macro Pi by David Hunt
                    </a>
                  </li>
                  <li>
                    <a href="https://petermobbs.wordpress.com/2014/10/08/an-arduino-controlled-focus-rail/">
                      Controller by Peter Mobbs
                    </a>
                  </li>
                </ul>
              </li>
              <li className={cx('col-sm-4', 'link-block')}>
                <h3>Stacking utilities</h3>
                <ul className={cx('plain')}>
                  <li>
                    <a href="http://www.zerenesystems.com/">
                      Zerene Stacker
                    </a>
                  </li>
                  <li>
                    <a href="http://www.heliconsoft.com/heliconsoft-products/helicon-focus/">
                      Helicon Focus
                    </a>
                  </li>
                  <li>
                    <a href="http://www.hadleyweb.pwp.blueyonder.co.uk/">
                      CombineZP
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }

}
