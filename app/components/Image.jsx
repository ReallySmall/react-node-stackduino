/**
 * Image
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_image';

const cx = classNames.bind(styles);

export default class Image extends Component {

  propTypes : {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    ratio: PropTypes.string.isRequired
  }

  render() {

    return (
      <div className={s['img-placeholder']} style={{paddingBottom: this.props.ratio + '%'}}>
        <img src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }

}
