/**
 * Flickr Carousel
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_topic-item';
import Link from '../Link';
import Image from '../Image';

const cx = classNames.bind(styles);

export default class FlickrCarousel extends Component {

  FlickrCarousel.propTypes = {
    imageList: PropTypes.array.isRequired,
    assets: PropTypes.array.isRequired
  };

  FlickrCarousel.contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {

    var images = [];

    return (
      <div className={cx('images', 'carousel')}>
        <div className={cx('js-flexslider', 'flexslider')}>
          <ul className={cx('plain')}>
            <li>
              <a href="#" className={cx('slide-cover', 'slide-cover-left', 'flex-prev')}>
                <span className={cx('fa', 'fa-arrow-circle-left')}></span>
                <span className={cx('visually-hidden')}>Show previous image</span>
              </a>
            </li>
            <li>
              <a href="#" className={cx('slide-cover', 'slide-cover-right', 'flex-next')}>
                <span className={cx('fa', 'fa-arrow-circle-right')}></span>
                <span className={cx('visually-hidden')}>Show next image</span>
              </a>
            </li>
          </ul>
          <ul className={cx('slides', 'plain', 'no-list-style')}>
            <li>
              <a href="http://flickr.com/photo.gne?id={{item.id}}" tabindex="-1">
                <figure>       
                    <img />
                    <figcaption>
                      <p>Caption</p>
                    </figcaption>
                </figure>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}