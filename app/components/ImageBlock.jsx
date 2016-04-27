import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_board-teaser';

const cx = classNames.bind(styles);

export default class ImageBlock extends Component {

  constructor(props) {
    super(props);
  }

  render(){

    const { images } = this.props;
    let imageBlock = [];

    for(var i = 0; i < images.length; i++){
      let img = images[i];
      let colWidth = Math.ceil(12 / images.length);
      img.ratio = (img.height / img.width) * 100;
      imageBlock.push(
        <div className={cx('col-md-' + colWidth)}>
          <div className={cx('inset-wrapper')}>
            <figure>
              <Image src={img.url} alt="" ratio={img.ratio}/>
              <figcaption>Test</figcaption>
            </figure>
          </div>
        </div>
      );
    }

    return (
      <div>{imageBlock}</div>
    );

  }

}

ImageBlock.propTypes = {
  images: PropTypes.array.isRequired
};
