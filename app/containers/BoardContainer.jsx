import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
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
      this.props.dispatch ( fetchBoard(this.props.routeParams) );
    };

  	render() {
      const {board} = this.props.board;
            console.log(this.props);

	  	return (
        <Board 
          title={this.props.board[0].title} 
          status={this.props.board[0].boardStatus}
          developed={this.props.board[0].boardStatus} 
          intro={this.props.board[0].content.brief}
          body={this.props.board[0].content.extended}
          images={this.props.board[0].images}
          version={this.props.board[0].version} />
	  	);

  	}
};

BoardContainer.propTypes = {
  // todo
};

function mapStateToProps(state) {
  return {
    board: state.boards.boards
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(BoardContainer);
