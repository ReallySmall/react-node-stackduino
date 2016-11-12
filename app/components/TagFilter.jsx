import React, { Component, PropTypes } from 'react';
import {map} from "underscore";
import classNames from 'classnames/bind';
import styles from 'css/components/_tag-filter';

const cx = classNames.bind(styles);

export default class TagFilter extends Component {

  render(){

  	const { tags } = this.props;

    return ( 
		<div className={cx('tag-filter', 'col-md-12')}>
			<small className={cx('plain')}>Showing content tagged with:</small>
			<ul className={cx('plain', 'tags')}>
				{map(tags, function(tag, i){
		            return (
		                <li key={i}>
		                	<a href="#" className={cx('tag')}>{tag} <span className={cx('fa', 'fa-close')}></span></a>
		                </li>
		            );
	          	})}
			</ul>
		</div>
    );
  }

}
