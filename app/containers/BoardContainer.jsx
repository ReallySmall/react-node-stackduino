import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
//import Board from 'components/Board';
import { fetchBoard } from 'actions/boards';
import { fetchWrapper } from 'actions/wrapper';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

class BoardContainer extends Component {

  	//Data that needs to be called before rendering the component
  	//This is used for server side rending via the fetchComponentDataBeforeRending() method
  	static need = [
    	fetchWrapper, fetchBoard
  	];

  	constructor(props) {
    	super(props);
  	};

    componentWillMount() {
      this.props.dispatch ( fetchBoard() );
    };

  	render() {

      const {board} = this.props;
	  	return (
	    	<p>Moo</p>
	  	);

  	}
};

BoardContainer.propTypes = {};

function mapStateToProps(state) {
  return {
    content: state.board.boards
  };
}

export default connect(mapStateToProps)(BoardContainer);
