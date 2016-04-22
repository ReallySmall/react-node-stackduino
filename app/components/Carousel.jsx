import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_carousel';
import { Link } from 'react-router';
import Image from 'components/Image';

const cx = classNames.bind(styles);

export default class Carousel extends Component {

  render() {

    let images = [];
    let img = {};

    for (let i = 0; i < this.props.imageList.length; i++){
      img = this.props.imageList[i];
      img.ratio = (img.height / img.width) * 100;
      images.push(
        <figure key={i}>
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

Carousel.propTypes = {
  imageList: PropTypes.array.isRequired,
  hideCaption: PropTypes.boolean
};
