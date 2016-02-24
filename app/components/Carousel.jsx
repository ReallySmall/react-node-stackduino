/**
 * Carousel
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_carousel.scss';
import Link from 'components/Link';
import Image from 'components/Image';

export default class Carousel extends Component {

  static propTypes = {
    imageList: PropTypes.array.isRequired,
    assets: PropTypes.array.isRequired
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {

    var getImageData = function(id, assets){
      var img = {};
      for(var i = 0; i < assets.length; i++){
        if(id === assets[i].sys.id){
          img.url = assets[i].fields.file.url;
          img.ratio = (assets[i].fields.file.details.image.height / assets[i].fields.file.details.image.width) * 100;
          img.alt = assets[i].fields.title;
          break;
        }
      }
      return img;
    }

    var images = [];

    for(var i = 0; i < this.props.imageList.length; i++){
      var img = getImageData(this.props.imageList[i].sys.id, this.props.assets);
      images.push(
        <figure>
          <Image src={img.url} alt={img.alt} ratio={img.ratio}/>
          {this.props.hideCaption === true ? '' : <figcaption>{img.alt}</figcaption>}
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