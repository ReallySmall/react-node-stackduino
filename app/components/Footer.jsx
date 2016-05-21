import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_footer';
import { Link } from 'react-router';

const cx = classNames.bind(styles);

export default class Footer extends Component {

  render() {

    const { wrapperData, linkData } = this.props;
    
    let col1ExternalLinksElements = [];
    let col2ExternalLinksElements = [];
    let col3ExternalLinksElements = [];

    if(linkData && linkData.length){
      for (let i = 0; i < linkData.length; i++) {
        let link = linkData[i]
        let markup =  <li key={i}><a href={link.url} title={link.description}>{link.title}</a></li>;
        if(link.location === 'footer_col1'){
          col1ExternalLinksElements.push(markup);
        } else if(link.location === 'footer_col2'){
          col2ExternalLinksElements.push(markup);
        } else if(link.location === 'footer_col3'){
          col3ExternalLinksElements.push(markup);
        }
      }
    }

    return (
      <footer className={cx('footer')}>
        <div className={cx('container')}>
          <div className={cx('row')}>
            <ul className={cx('plain', 'clearfix', 'link-block-container')}>
              <li className={cx('col-sm-4', 'link-block')}>
                <h3>
                  <span className={cx('fa', 'fa-external-link-square')}></span>
                  {wrapperData.footer.col1.title}
                </h3>
                <ul className={cx('plain')}>
                  {col1ExternalLinksElements}
                </ul>
              </li>
              <li className={cx('col-sm-4', 'link-block')}>
                <h3>
                  <span className={cx('fa', 'fa-external-link-square')}></span>
                  {wrapperData.footer.col2.title}
                </h3>
                <ul className={cx('plain')}>
                  {col2ExternalLinksElements}
                </ul>
              </li>
              <li className={cx('col-sm-4', 'link-block')}>
                <h3>
                  <span className={cx('fa', 'fa-external-link-square')}></span>
                  {wrapperData.footer.col3.title}
                </h3>
                <ul className={cx('plain')}>
                  {col3ExternalLinksElements}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }

}
