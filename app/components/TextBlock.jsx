import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_board-teaser';

const cx = classNames.bind(styles);

export default class TextBlock extends Component {

  constructor(props) {
    super(props);
  }

  render(){

    const { content } = this.props;

    return (
      <div dangerouslySetInnerHTML={{ __html: content || '' }} />
    );

  }

}

TextBlock.propTypes = {
};
