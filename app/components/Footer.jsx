import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import classNames from 'classnames/bind';
import styles from 'css/components/_footer';

const cx = classNames.bind(styles);

export default class Footer extends Component {

  render() {

    const { col1, col2, col3 } = this.props.content;

    return (
      <footer className={cx('footer')}>
        <div className={cx('container')}>
          <div className={cx('row')}>
            <ul className={cx('plain', 'clearfix', 'link-block-container')}>
              <li className={cx('col-sm-4', 'link-block')}>
                <h3>
                  <span className={cx('fa', 'fa-external-link-square')}></span>
                  {col1.title}
                </h3>
                <ul className={cx('plain')}>
                  {_.map(col1.list, function(link, i){
                    return(
                      <li key={i}><a href={link.url} title={link.title}>{link.title}</a></li>
                    )
                  })}
                </ul>
              </li>
              <li className={cx('col-sm-4', 'link-block')}>
                <h3>
                  <span className={cx('fa', 'fa-external-link-square')}></span>
                  {col2.title}
                </h3>
                <ul className={cx('plain')}>
                    {_.map(col2.list, function(link, i){
                      return (
                        <li key={i}><a href={link.url} title={link.title}>{link.title}</a></li>
                      )
                    })}
                </ul>
              </li>
              <li className={cx('col-sm-4', 'link-block')}>
                <h3>
                  <span className={cx('fa', 'fa-external-link-square')}></span>
                  {col3.title}
                </h3>
                <ul className={cx('plain')}>
                  {_.map(col3.list, function(link, i){
                    return (
                      <li key={i}><a href={link.url} title={link.title}>{link.title}</a></li>
                    )
                  })}                
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }

}
