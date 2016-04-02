import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Boards from 'components/Boards';
import { fetchBoards } from 'actions/boards';
import { fetchWrapper } from 'actions/wrapper';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

class BoardsContainer extends Component {

  	//Data that needs to be called before rendering the component
  	//This is used for server side rending via the fetchComponentDataBeforeRending() method
  	static need = [
    	fetchWrapper, fetchBoards
  	];

  	constructor(props) {
    	super(props);
  	};

    componentWillMount() {
      if(!this.props.teasers.length){ // if boards are not in state yet
        this.props.dispatch ( fetchBoards() ); // add them
      }
    };

  	render() {

      const {teasers} = this.props;
	  	return (
	    	<Boards list={teasers} />
	  	);

  	}
};

BoardsContainer.propTypes = {
  teasers: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  console.log(state);
  return {
    teasers: state.boards.teasers
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(BoardsContainer);
