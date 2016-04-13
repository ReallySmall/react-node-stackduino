import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Board from 'components/Board';
import Loading from 'components/Loading';
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
        this.props.isFetching = true;
        this.props.dispatch ( fetchBoard(this.props.routeParams) ); // add it
      }
    };

  	render() {

      const { board } = this.props;
      const boardContent = this.props.isFetching === true ? <p>Loading</p> : <Board 
          title={board.title} 
          status={board.boardStatus}
          developed={board.boardStatus} 
          intro={board.content.brief}
          body={board.content.extended}
          images={board.images}
          version={board.version} />

	  	return (
        boardContent
	  	);

  	}
};

BoardContainer.propTypes = {
  // todo
};

function mapStateToProps(state, props) {
  return {
    board: state.boards.details[props.routeParams.slug],
    isFetching: state.boards.isFetching
  };
}

export default connect(mapStateToProps)(BoardContainer);
