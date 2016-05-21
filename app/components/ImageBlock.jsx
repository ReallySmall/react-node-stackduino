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

    let imageBlock = _.map(images, function(image, i){
      
      let colWidth = Math.ceil(12 / images.length);
      image.ratio = (image.height / image.width) * 100;
      image.caption = '';
      
      return (
        <div key={i} className={cx('col-md-' + colWidth)}>
          <div className={cx('inset-wrapper')}>
            <figure>
              <Image src={image.url} alt="" ratio={image.ratio}/>
              {image.caption && <figcaption>{image.caption}</figcaption>}
            </figure>
          </div>
        </div>
      );

    });

    return (
      <section>
        {imageBlock}
      </section>
    );

  }

}

ImageBlock.propTypes = {
  images: PropTypes.array.isRequired
};
