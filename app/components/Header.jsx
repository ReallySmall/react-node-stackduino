import React, { Component, PropTypes } from 'react';
import {map} from "underscore";
import classNames from 'classnames/bind';
import styles from 'css/components/_header';
import { Link } from 'react-router';
import Navigation from 'components/Navigation';
import LegacyWarning from 'components/LegacyWarning';

const cx = classNames.bind(styles);

export default class Header extends Component {

  constructor(props) {
    super(props);
  };

  render() {

    const { siteTitle, siteSubtitle, links } = this.props.content;
    const { route } = this.props.route;

    return (
      <div className={cx('header-container')}>
          <header className={cx('site-header')}>
            <LegacyWarning />
            <div className={cx('container')}>
              <div className={cx('row')}>
                <Link to={'/'} id="logo" className={cx('site-branding')}>
                    <p className={cx('animated-site-logo')}>
                      <span className={cx('fa', 'fa-pause')}></span>
                      <span className={cx('fa', 'fa-camera')}></span>
                    </p>
                    <div className={cx('site-descriptor')}>
                      <h1 className={cx('site-title')}>{siteTitle}</h1>
                      <p className={cx('site-slogan')}>{siteSubtitle}</p>
                    </div>
                </Link>
                <div className={cx('social-links')}>
                  <ul className={cx('plain')}>
                    {map(links.list, function(link, i){
                      return (
                        <li key={i}>
                          <a href={link.url} title={link.title}>
                            <span className={cx('fa', link.icon)}>
                              <span className={cx('visually-hidden')}>{link.title}</span>
                            </span>
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <Navigation route={route} />
      </div>
    );

  }

}

Header.propTypes = {};
