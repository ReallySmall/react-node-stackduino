/**
 * Carousel
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_carousel.scss';
import { Link } from 'react-router';
import Image from 'components/Image';

const cx = classNames.bind(styles);

export default class Carousel extends Component {

  static propTypes = {
    imageList: PropTypes.array.isRequired,
    assets: PropTypes.array.isRequired
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {

    var images = [];

    for(var i = 0; i < this.props.imageList.length; i++){
      img = this.props.imageList[i];
      img.ratio = (img.height / img.width) * 100;
      images.push(
        <figure>
          <Image src={img.url} alt="" ratio={img.ratio}/>
          {this.props.hideCaption === true ? '' : <figcaption>Test</figcaption>}
        </figure>
      );
    }

    return (
      <div className={cx('carousel')}>
        <ul>
          {images}
        </ul>
      </div>
    );
  }

}