import React, { Component, PropTypes } from 'react';
import Icon from 'react-fa';
import classNames from 'classnames/bind';
import styles from 'css/components/_load-more';

const cx = classNames.bind(styles);

export default class LoadButton extends Component {

  render(){
    return (
    	<a href="#">
        Load more
        <Icon name="arrow-circle-down" />
      </a>
    );
  }

}
