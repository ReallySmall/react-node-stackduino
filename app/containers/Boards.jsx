import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from 'scss/components/_boards-page';
import BoardTeaser from 'components/BoardTeaser';
import { fetchBoards } from 'actions/boards';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

 class Boards extends Component {

  	//Data that needs to be called before rendering the component
  	//This is used for server side rending via the fetchComponentDataBeforeRending() method
  	static need = [
    	fetchBoards
  	];

  	constructor(props) {
    	super(props);
  	};

  	render() {
      const {boards} = this.props;
	  	return (
	    	<div className={cx('view-animate-container')}>
	        	<div className={cx('container')}>
	          		<h1></h1>
	          		<p></p>
                {boards}	          		
	        	</div>
	      	</div>
	  	);

  	}
};

Boards.propTypes = {
  //boards: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    //boards: state.boards
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(Boards);

