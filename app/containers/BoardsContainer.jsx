import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Boards from 'components/Boards';
import { fetchBoards } from 'actions/boards';
import { fetchSettings } from 'actions/settings';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

class BoardsContainer extends Component {

  	//Data that needs to be called before rendering the component
  	//This is used for server side rending via the fetchComponentDataBeforeRending() method
  	static need = [
    	fetchSettings, fetchBoards
  	];

  	constructor(props) {
    	super(props);
  	};

  	render() {

      const {boards} = this.props;
	  	return (
	    	<Boards list={boards} />
	  	);

  	}
};

BoardsContainer.propTypes = {
  boards: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    boards: state.board.boards
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(BoardsContainer);
