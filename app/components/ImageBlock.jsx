import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import classNames from 'classnames/bind';
import styles from 'css/components/_board-teaser';
import Image from 'components/Image';

const cx = classNames.bind(styles);

export default class ImageBlock extends Component {

  constructor(props) {
    super(props);
  }

  render(){

    const { images } = this.props;

    let imageBlock = _.map(images, function(imageData, i){
      
      let colWidth = Math.ceil(12 / images.length);
      imageData.image.ratio = (imageData.image.height / imageData.image.width) * 100;
      
      return (
        <div key={i} className={cx('col-md-' + colWidth)}>
          <div className={cx('inset-wrapper')}>
            <figure>
              <Image src={imageData.image.url} alt={imageData.title} ratio={imageData.image.ratio}/>
              {imageData.caption && <figcaption dangerouslySetInnerHTML={{ __html: imageData.caption || '' }} />}
            </figure>
          </div>
        </div>
      );

    });

    return (
      <div className={cx('row')}>
        {imageBlock}
      </div>
    );

  }

}

ImageBlock.propTypes = {
  images: PropTypes.array.isRequired
};
