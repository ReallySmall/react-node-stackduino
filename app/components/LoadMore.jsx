import React, { Component, PropTypes } from 'react';
import { fetchGalleryImages } from 'actions/gallery';
import classNames from 'classnames/bind';
import styles from 'css/components/_gallery-page';

const cx = classNames.bind(styles);

export default class LoadMore extends Component {

  handleClick(){
  	this.props.dispatch ( fetchGalleryImages(this.props.page + 1) );
  }

  render(){

  	const { page, pages, isFetching } = this.props;
  	let buttonElement = null;

  	if(!isFetching && page < pages){
  		buttonElement = <button type="button" onClick={this.handleClick} className={cx('btn', 'btn-primary', 'center-block')}>
        					Show more
      					</button>
  	} 

    return (
    	{buttonElement}
    );
  }

}
