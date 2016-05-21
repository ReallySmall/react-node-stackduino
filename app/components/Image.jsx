import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_image';

const cx = classNames.bind(styles);

export default class Image extends Component {

  render() {

    const {ratio, src, alt} = this.props;

    return (
      <div className={cx('img-placeholder')} style={{paddingBottom: ratio + '%'}}>
        <img src={src} alt={alt} />
      </div>
    );
  }

}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  ratio: PropTypes.string.isRequired
}
