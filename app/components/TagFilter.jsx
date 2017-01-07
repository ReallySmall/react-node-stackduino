import React, { Component, PropTypes } from 'react';
import { routerMiddleware, push } from 'react-router-redux';
import { connect } from 'react-redux';
import { reject, difference } from 'underscore';
import { filterByTags } from 'actions/posts';
import {map} from "underscore";
import classNames from 'classnames/bind';
import styles from 'css/components/_tag-filter';

const cx = classNames.bind(styles);

class TagFilter extends Component {

	constructor(props) {
    	super(props);
	    this.setState = this.setState.bind(this);
	    this.filterSelect = this.filterSelect.bind(this);
  	};

  	filterSelect(event){

  		const { filter } = this.props;
  		const updatedTags = this.props.filters || [];

		updatedTags.push(event.target.value);
		filter(updatedTags);

  	};

  	removeFilter(i, event){

  		event.preventDefault();

  		const { filter, filters } = this.props;
  		const tag = filters[i];;
		const updatedTags = reject(filters, function(item){ 
								return item === tag; 
							});

		filter(updatedTags);

  	};

  	render(){

	  	const { tags, filters, filterLength } = this.props;
	  	const label = filters && filters.length ? 'Showing content tagged with:' : 'Showing all content';
	  	const availableTags = difference(tags, filters);
	  	const filterControlLabel = filters && filters.length ? 'Add another filter' : 'Add a filter'
	  	const filterControl = availableTags.length 
	  		?	<div>
	  				<label htmlFor="tag-filter-select" className={cx('visually-hidden')}>Available tags</label>
					<select id="tag-filter-select" onChange={this.filterSelect} value=''>
						<option value={filterControlLabel}>{filterControlLabel}</option>
						{map(availableTags, function(tag, i){
				            return (
				                <option key={i} value={tag}>{tag}</option>
				            );
			          	})}
					</select>
				</div>
			: null;

	    return ( 
			<div className={cx('tag-filter')}>
				<small className={cx('plain', 'filter-label')}>{label}</small>
				<ul className={cx('plain', 'tags')}>
					{map(filters, (item, i) => {
						let boundItemClick = this.removeFilter.bind(this, i);
			            return (
			                <li key={i}>
			                	<a 
			                		href="#" 
			                		role="button"
			                		className={cx('tag')}
			                		onClick={boundItemClick}>{item} <span className={cx('fa', 'fa-close')}></span>
			                	</a>
			                </li>
			            );
		          	})}
				</ul>
				{filterControl}
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
