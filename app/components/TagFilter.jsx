import React, { Component, PropTypes } from 'react';
import { routerMiddleware, push } from 'react-router-redux';
import { connect } from 'react-redux';
import { reject } from 'underscore';
import { filterByTags } from 'actions/posts';
import {map} from "underscore";
import classNames from 'classnames/bind';
import styles from 'css/components/_tag-filter';

const cx = classNames.bind(styles);

class TagFilter extends Component {

	constructor(props) {
    	super(props);
  	};

  render(){

  	const { tags, filter } = this.props;
  	const label = tags && tags.length ? 'Showing content tagged with:' : 'Showing all content';

    return ( 
		<div className={cx('tag-filter', 'col-md-12')}>
			<small className={cx('plain')}>{label}</small>
			<ul className={cx('plain', 'tags')}>
				{map(tags, function(tag, i){
		            return (
		                <li key={i}>
		                	<a 
		                		href="#" 
		                		className={cx('tag')} 
		                		onClick={(event) => { 
              						event.preventDefault();
              						const updatedTags = reject(tags, function(item){ return item === tag; });
					            	filter(updatedTags); 
            					}}>{tag} <span className={cx('fa', 'fa-close')}></span></a>
		                </li>
		            );
	          	})}
			</ul>
		</div>
    );
  }

};

function mapStateToProps() { return {};};

function mapDispatchToProps(dispatch) {
  return {
    filter: (tags) => dispatch(filterByTags(tags))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TagFilter);
