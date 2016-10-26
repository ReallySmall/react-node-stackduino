import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { isClient } from 'utilities/environment';
import NotFoundContainer from 'containers/NotFoundContainer';
import Page from 'components/Page';
import Board from 'components/Board';
import { fetchWrapper } from 'actions/wrapper';
import { fetchBoard } from 'actions/boards';

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
      if(!this.props.board){ // if board detail is not in state yet
        this.props.dispatch ( fetchBoard(this.props.routeParams) ); // add it
      }
    };

  	render() {

      const { board, isFetching, requestFailed } = this.props;

	  	return (
        <Page isFetching={isFetching} requestFailed={requestFailed} >
          {board && <Board {...board} />} 
        </Page>
	  	);

  	}
};

BoardContainer.propTypes = {
  // todo
};

function mapStateToProps(state, props) {

  return {
    board: state.boards.details[props.routeParams.slug],
    isFetching: state.boards.details[props.routeParams.slug] ? state.boards.isFetching : true,
    requestFailed: state.boards.requestFailed
  };
  
}

export default connect(mapStateToProps)(BoardContainer);
