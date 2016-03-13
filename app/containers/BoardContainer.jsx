import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
//import Board from 'components/Board';
import { fetchBoards } from 'actions/boards';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

class BoardContainer extends Component {

  	//Data that needs to be called before rendering the component
  	//This is used for server side rending via the fetchComponentDataBeforeRending() method
  	static need = [
    	fetchBoards()
  	];

  	constructor(props) {
    	super(props);
  	};

  	render() {

      const {board} = this.props;
	  	return (
        <p>Test</p>
	  	);

  	}
};

BoardContainer.propTypes = {
  // todo
};

function mapStateToProps(state) {
  console.log(state);
  return {
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(BoardContainer);
