import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_header';
import { Link } from 'react-router';

const cx = classNames.bind(styles);

export default class Header extends Component {

  constructor(props) {
    super(props);
  };

  render() {

    const { wrapperData, linkData } = this.props;
    let externalLinksElements = [];

    if(linkData && linkData.length){
      for (let i = 0; i < linkData.length; i++) {
        let link = linkData[i]
        if(link.location === 'header'){
          externalLinksElements.push(
            <li key={i}>
              <a href={link.url} title={link.title}>
                <span className={cx('fa', link.icon)}>
                  <span className={cx('visually-hidden')}>{link.title}</span>
                </span>
              </a>
            </li>
          );
        }
      }
    }

    return (
      <header className={cx('site-header')}>
        <div className={cx('container')}>
          <div className={cx('row')}>
            <Link to={'/'} id="logo" className={cx('site-branding')}>
                <p className={cx('animated-site-logo')}>
                  <span className={cx('fa', 'fa-pause')}></span>
                  <span className={cx('fa', 'fa-camera')}></span>
                </p>
                <div className={cx('site-descriptor')}>
                  <h1 className={cx('site-title')}>{wrapperData.header.siteTitle}</h1>
                  <p className={cx('site-slogan')}>{wrapperData.header.siteSubtitle}</p>
                </div>
            </Link>
            <div className={cx('social-links')}>
              <ul className={cx('plain')}>
                {externalLinksElements}
              </ul>
            </div>
          </div>
        </div>
      </header>
    );

  }

}

Header.propTypes = {
  wrapperData: PropTypes.object.isRequired,
  linkData: PropTypes.array.isRequired
};
